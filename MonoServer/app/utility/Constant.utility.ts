import dotenv from "dotenv"

dotenv.config()
export const JwtSecret: string = process.env.JWT_SECRET || "default_secret_key";
export const JwtRefSecret: string = process.env.JWT_REFRESH_SECRET || "default_refresh_key" 
