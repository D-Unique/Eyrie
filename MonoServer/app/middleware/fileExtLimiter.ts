import { HttpResponse } from "../utility/HttpResponse.utility";
import { Request, Response, NextFunction } from "express";
import path from "path";
import { UploadedFile } from "express-fileupload"; // you should import this

export default function (allowedExtensions: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const files = req.files;
    const fileExtensions: string[] = [];

    if (files) {
      Object.keys(files).forEach((key) => {
        const fileOrFiles = files[key] as UploadedFile | UploadedFile[];

        if (Array.isArray(fileOrFiles)) {
            fileOrFiles.forEach((file) => {
                const extension = path.extname(file.name);
                fileExtensions.push(extension);
            });
        } else {
          fileExtensions.push(path.extname(fileOrFiles.name));
        }
      });
    }

    const allowed = fileExtensions.every((ext) => allowedExtensions.includes(ext));
 
    if (!allowed) {
      const message = `Upload failed. Only ${allowedExtensions.join(", ")} files allowed.`;
      return res.status(422).json(HttpResponse.UnprocessableEntity(null, message));

    }

    next();
  };
}
