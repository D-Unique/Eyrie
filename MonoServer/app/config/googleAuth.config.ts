// googleAuth.config.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { GoogleClientSecret, GoogleClientId } from "../utility/Constant.utility";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../key";
import { manageMysqlDB } from "../database/Mysql.database"
import { RowDataPacket } from "mysql2";

// Serialize and deserialize user
passport.serializeUser ((user, done) => {
    done(null, user);
})

passport.deserializeUser(async (id, done) => {
    const mysqlConnection = await manageMysqlDB.getConnection()
    const query3 = `SELECT * FROM User WHERE id = ?`
    const rows = await mysqlConnection.query(query3, [id])
    if (Array.isArray(rows) && rows.length > 0) {
        const user = (rows as RowDataPacket)[0]
        done(null, user);
    }
});

const googleStrategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/eyrie/api/v1/auth/google/callback",
}, async (accesstoken, refreshtoken, profile, done) => { 
   
    const email = profile._json.email
    const first_name = profile._json.given_name
    const last_name = profile._json.family_name
    const google_id = profile.id
    try {
        const mysqlConnection = await manageMysqlDB.getConnection()

        // check if users exists
        const query = 'SELECT * FROM User WHERE email = ?';
        const [result] = await (await mysqlConnection).query(query, [email]);
        if (Array.isArray(result) && result.length === 0) {
            // User does not exist so we add user to database
    
            const query2 = `
        INSERT INTO User (first_name, last_name, email, google_id)
        VALUES (?, ?, ?, ?)
        `;
            const [result2] = await (await mysqlConnection).query(query2, [first_name, last_name, email, google_id]);
            if ('affectedRows' in result2 && result2.affectedRows > 0) {
                done(null, result2.insertId)
                // Process the user object here
            } else {
                console.error("Unexpected result type:", result2);
            }
                
        } else {
            // User already exist so retrive user
            const user = (result as RowDataPacket)[0]
            done(null, user.id)
        
        }
    }
    catch (err) {
        console.error(err)

    }
})

// (accessToken, refreshToken, profile, cb) => {
//     // Handle the user profile here
//     return cb(null, profile);
// }

passport.use(googleStrategy);


export default passport; 
