import mysql2 from "mysql2"
import dotenv from "dotenv"
// import config from "../config/db.config"
// import { dbConfigType } from "../interface/Config.interface"
dotenv.config()

// const environment: keyof dbConfigType = process.env.NODE_ENV === 'production' ? 'production' : 'development';
// const dbConfig = config[environment]

// const mysqlConnection = mysql2.createConnection(`mysql://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);
const mysqlConnection = mysql2.createConnection({
  host: process.env.MYSQL_DATEBASE_HOST, // Should resolve to 'mysqlDb' in the Docker network
  user: process.env.MYSQL_DATABASE_USER, // Eyrie
  password: process.env.MYSQL_DATEBASE_PASSWORD, // Eyrie12345
  database: process.env.MYSQL_DATEBASE_NAME, // Your database name
  port: 3306
});

export async function checkDatabaseConnection() {
    try {
      // Ping the database to check if it is up
      await mysqlConnection.ping();
      console.log("MysqlDb is up and running!");
    } catch (err) {
      console.error("Error connecting to the mysql database:", err);
    }
  }

export { mysqlConnection };
