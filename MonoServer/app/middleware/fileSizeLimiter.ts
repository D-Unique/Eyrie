import { Request, Response, NextFunction } from "express";
import { HttpResponse } from "../utility/HttpResponse.utility";
const MB = 5

const FILE_SIZE_LIMIT = MB * 1024 * 1024;

export default function fileSizeLimiter(req: Request, res: Response, next: NextFunction) {
    const files = req.files
    const fileAboveLimit: string[] = []
    if (files) {
        Object.keys(files).forEach(key => {
        const file = files[key];
        if (Array.isArray(file)) {
            file.forEach(f => {
                if (f.size > FILE_SIZE_LIMIT) {
                    fileAboveLimit.push(f.name);
                }
            });
        } else if (file.size > FILE_SIZE_LIMIT) {
            fileAboveLimit.push(file.name);
        }
        })
    }
    if (fileAboveLimit.length) {
        const properVerb = fileAboveLimit.length > 1 ? 'are' : 'is';
        const sentance = ` Upload failed. ${fileAboveLimit.toString()}. ${properVerb} over the file size limit of ${MB} MB.`.replace(',', ', ');

        const message = fileAboveLimit.length < 3 ? sentance.replace(',', ' and') : sentance.replace(/,(?=[^,]*$)/, " and");
        return res.json(HttpResponse.PayloadTooLarge( null, message))

    }

    next()
}
