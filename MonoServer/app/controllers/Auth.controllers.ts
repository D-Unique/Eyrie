import { Request, Response } from "express";
import { JwtRefSecret} from "../utility/Constant.utility";
import redis from "../database/Redis.database";
import jwt from "jsonwebtoken"
import { HttpResponse } from "../utility/HttpResponse.utility";
import { generateJwtToken, generateRefreshJwtToken, verifyToken } from "../utility/Auth.utility";
import { manageMysqlDB } from "../database/Mysql.database";
import argon2 from "argon2"
import { RowDataPacket } from 'mysql2';




declare module "express-serve-static-core" {
    interface Request {
        token?: string;
        payload?: string | jwt.JwtPayload;
    }
}

const mqlconnection = manageMysqlDB.getConnection()

export class AuthController {

    static async signup(req: Request, res: Response) {
        try {
            const { fname, lname, email, password } = req.body
            if (!fname || !lname || !email || !password) {
                return res.json(HttpResponse.BadRequest(null, "all field must be provided"))
            }

            // check if user exists
            const query1 = 'SELECT * FROM User WHERE email = ?';
            const [result1] = await (await mqlconnection).query(query1, [email]);
            if (Array.isArray(result1) && result1.length > 0) {
                return res.json(HttpResponse.Forbidden(`User already exists`))
            }

            //Hash password
            const hashedp = await argon2.hash(password);

            // Add New User to Database
            const query2 = `
        INSERT INTO User (first_name, last_name, email, password)
        VALUES (?, ?, ?, ?)
      `;
           const [result2] = await (await mqlconnection).query(query2, [fname, lname, email, hashedp]);
            if ('affectedRows' in result2 && result2.affectedRows > 0) {
                return res.json(HttpResponse.Created(null, `User ${fname} created successfully`));
              } else {
                return res.json(HttpResponse.InternalServerError("User was not created"));
              }
            
        } catch (err) {
            console.log(err)
            return res.send(HttpResponse.InternalServerError())
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            // check if all detiles are provided
            if (!email || !password) {
                return res.json(HttpResponse.BadRequest(null, `all fields are required`))
            }

            // check if users exists
            const query = 'SELECT * FROM User WHERE email = ?';
            const [result] = await (await mqlconnection).query(query, [email]);
            if (Array.isArray(result) && result.length === 0) {
                return res.json(HttpResponse.Unauthorized(`User does not exists`))
            }

            // get user, user's password and verify it
            const user = (result as RowDataPacket[])[0];
            const storedPassword = user.password;
            const correctPassword = await argon2.verify(storedPassword, password)
            if (!correctPassword) {
                return res.json(HttpResponse.Unauthorized(`incorrect password`))
            }

            // generate JWT-ACCESSTOKEN
            const payload = {
                first_name: user.first_name as string, role: user.role as string, email: user.email as string
            }
            const accessToken = generateJwtToken(payload)
            const refreshAccessToken = generateRefreshJwtToken(payload)

            // save refresh-token on redis
            await redis.set(refreshAccessToken as string, JSON.stringify(payload), 'EX', 50)
            return res.json(HttpResponse.OK({ accessToken, refreshAccessToken }, "login successful"));   
        }
        catch (err) {
            console.log(err)
            return res.json(HttpResponse.InternalServerError)
        }

    }
    
    

    static async refreshToken(req: Request, res: Response) {
        try {
            const { refreshAccessToken } = req.body
            if (!refreshAccessToken) {
                return res.json(HttpResponse.BadRequest(null, "Refresh token is required"));
            }


            const exists = await redis.exists(refreshAccessToken);
            if (exists !== 1) {
                return res.json(HttpResponse.Unauthorized("Token does not exist or has expired"));
            }


            const verified = verifyToken(refreshAccessToken, JwtRefSecret)
            if (!verified || typeof verified === 'string') {
                return res.json(HttpResponse.Forbidden( "Invalid refresh token"));
            }
            const payload = { first_name: verified.first_name, role: verified.role, email: verified.email }
            const accessToken = generateJwtToken(payload)
            return res.json(HttpResponse.Created({accessToken}, "accessToken reCreated"))
            

        } catch (err) {
            console.error("Error in refreshToken:", err);
            return res.json(HttpResponse.InternalServerError);
        }

    }

    static async logout(req: Request, res: Response) {
        try {
            // Assuming you're storing refresh tokens using some identifier (like the token itself or user ID)
            const { refreshAccessToken } = req.body;
    
            if (!refreshAccessToken) {
                return res.json(HttpResponse.BadRequest(null, "Refresh token missing in body"));
            }
    
            // Remove from Redis
            await redis.del(refreshAccessToken);
            return res.json(HttpResponse.OK(null, "Logout successful"));
        } catch (err) {
            console.error(err);
            return res.json(HttpResponse.InternalServerError("Something went wrong"));
        }
    }

}
