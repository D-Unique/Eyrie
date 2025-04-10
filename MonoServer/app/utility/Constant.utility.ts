import dotenv from "dotenv"

dotenv.config()

export const JwtSecret: string = process.env.JWT_SECRET || "default_secret_key";
export const JwtRefSecret: string = process.env.JWT_REFRESH_SECRET || "default_refresh_key" 
export const GoogleClientId: string = process.env.GOOGLE_CLIENT_ID || "default_google_client_id"
export const GoogleClientSecret: string = process.env.GGOOGLE_CLIENT_SECRET || "default_google_client_Secret"
export const sessionSecret: string = process.env.SESSION_SECRET || "your-session-secret"


