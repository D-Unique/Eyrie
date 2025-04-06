import { Request, Response } from "express";
import { checkDatabaseConnection } from "../database/Mysql.database";

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
            res.status(500).send("Server is up, but database is down!");
        }
    }
}



export default AppController
