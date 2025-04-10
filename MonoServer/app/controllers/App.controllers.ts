import { Request, Response } from "express";
import { checkDatabaseConnection, ManageMysqlTables } from "../database/Mysql.database";

import redis from "../database/Redis.database";


class AppController {
    static async healthCheck(req: Request, res: Response) {
        try {
            // check redis 
            redis.on('ready', () => console.log('🚀 Redis is ready to use'));
            // Check if the database is up
            await checkDatabaseConnection();
            // If database check is successful, respond with a success message
            res.send("App is up and running!");
        } catch (error) {
            // If the database is not available, respond with an error message
            console.error("Database connection failed:", error);
            return res.status(500).send("Server is up, but database is down!");
        }
    }

    static async createMysqlTable(req: Request, res: Response) {
        try {
            // CREATE USER TABLE
            await ManageMysqlTables.createMysqlDbTables()
            console.log("Table 'User' created successfully!");
            res.send("Table 'User' created successfully!");
        } catch (error) {
            // If the database is not available, respond with an error message
            console.log("User Table creation failed:", error);
            return res.status(500).send("Server is up, but database is down!");
        }
    }

    static async dropMysqlTable(req: Request, res: Response) {
        try {
            // CREATE USER TABLE
            await ManageMysqlTables.dropMysqlDbTables()
            console.log("Table 'User' dropped successfully!");
            res.send("Table 'User' dropped successfully!");
        } catch (error) {
            // If the database is not available, respond with an error message
            console.log("User Table dropping failed:", error);
            return res.status(500).send("Server is up, but database is down!");
        }
    }

}



export default AppController
