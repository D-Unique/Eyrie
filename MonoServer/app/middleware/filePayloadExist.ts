import { HttpResponse } from "../utility/HttpResponse.utility";
import { Request, Response, NextFunction } from "express";


export default function filePayloadExists(req: Request, res: Response, next: NextFunction) {
    if (!req.files) return res.json(HttpResponse.BadRequest(null, "No file Upload"))
    next()
}
