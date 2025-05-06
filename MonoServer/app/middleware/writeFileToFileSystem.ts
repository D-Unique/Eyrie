import fs from "fs";
import path from "path";
import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { HttpResponse } from "../utility/HttpResponse.utility";
import generateSecureRandomString from "../utility/GenerateRandom.utility";

function writeFileToFileSystem(req: Request, res: Response, next: NextFunction) {
    const files = req.files;
    const imageStoragePath = path.join('./app/Public/Images');
    const videoStoragePath = path.join('./app/Public/Videos');

    console.log('Received files:', files);

    // ✅ Create folders if missing
    if (!fs.existsSync(imageStoragePath)) {
        fs.mkdirSync(imageStoragePath, { recursive: true });
        console.log('Created Images folder');
    }
    if (!fs.existsSync(videoStoragePath)) {
        fs.mkdirSync(videoStoragePath, { recursive: true });
        console.log('Created Videos folder');
    }

    if (files) {
        Object.keys(files).forEach((key) => {
            const fileOrFiles = files[key] as UploadedFile | UploadedFile[];

            const saveFile = (file: UploadedFile) => {
                let filePath = '';

                if (!(file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/'))) {
                    console.log(`Unsupported file type: ${file.mimetype}`);
                    return res.json(HttpResponse.UnprocessableEntity(null, "Only Videos and Images are allowed"));
                }
                
                const fileName = generateSecureRandomString(5) // Generate unique filename 

                if (file.mimetype.startsWith('image/')) {
                    filePath = path.join(imageStoragePath, fileName); // Image file path
                    console.log(`Saving image file to: ${filePath}`);
                } else if (file.mimetype.startsWith('video/')) {
                    filePath = path.join(videoStoragePath, fileName); // Video file path
                    console.log(`Saving video file to: ${filePath}`);
                }
                file.mv(filePath, err => {
                    if (err) {
                        console.error(`Error saving file ${file.name}:`, err);
                        return res.json(HttpResponse.InternalServerError(`${err}`));
                    }
                    console.log(`Successfully saved file ${file.name}`);
                });
            };

            if (Array.isArray(fileOrFiles)) {
                console.log("just entered array")
                console.log(fileOrFiles)
                fileOrFiles.forEach(saveFile);
            } else {
                saveFile(fileOrFiles);
            }
        });
    } else {
        console.log('No files uploaded');
    }

    next();
}

export default writeFileToFileSystem;
