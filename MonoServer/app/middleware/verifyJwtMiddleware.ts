import { Request, Response, NextFunction } from "express"
import { HttpResponse } from "../utility/HttpResponse.utility"
import { verifyToken } from "../utility/Auth.utility"
import { JwtSecret } from "../utility/Constant.utility"


export async function varifyJwtToken(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader?.split(' ')[1]
        if (!token) {
            return res.json(HttpResponse.Unauthorized)
        }
        const payload = verifyToken(token, JwtSecret)
        if (payload === null) return res.json(HttpResponse.Forbidden)
        req.payload = payload
        next()
    } catch (err) {
        console.log(err)
        return res.json(HttpResponse.Forbidden)
    }

}
