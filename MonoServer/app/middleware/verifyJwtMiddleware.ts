import { Request, Response, NextFunction } from "express"
import { HttpResponse } from "../utility/HttpResponse.utility"
import { verifyToken } from "../utility/Auth.utility"
import { JwtSecret } from "../utility/Constant.utility"


export async function varifyJwtToken(req: Request, res: Response, next: NextFunction) {
    let token;
    const authHeader = req.headers.authorization
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1]
        if (!token) {
            return res.json(HttpResponse.Unauthorized("No Token, authorization denied"))
        }
            const payload = verifyToken(token, JwtSecret)
            if (payload === null) return res.json(HttpResponse.Unauthorized("Invalid Token, authorization denied"))
            req.payload = payload
            next()
    }
    else {
        return res.json(HttpResponse.Unauthorized("No Token, authorization denied"))
    }

}
