import { Router } from "express";
import HouseController from "../controllers/House.controllers"
import fileupload from "../middleware/uploadVideoImage";
import fileExtLimiter from "../middleware/fileExtLimiter";
import fileSizeLimiter from "../middleware/fileSizeLimiter";
import filePayloadExists from "../middleware/filePayloadExist";
import { roleGuard } from "../middleware/roleGuard";
import { varifyJwtToken } from "../middleware/verifyJwtMiddleware";

export const houseRouter = Router()

houseRouter.post("/upload", varifyJwtToken, roleGuard(['admin', 'seller', 'Buyer']), fileupload, filePayloadExists, fileExtLimiter(['.jpg', '.png', '.jpeg']), fileSizeLimiter, HouseController.uploadhouse)
houseRouter.post("/update/:houseId", varifyJwtToken, roleGuard(['admin', 'seller', 'Buyer']), fileupload, filePayloadExists, fileExtLimiter(['.jpg', '.png', '.jpeg']), fileSizeLimiter, HouseController.updatehouse)
houseRouter.get('/delete/:houseId', varifyJwtToken, roleGuard(['admin', 'seller', 'Buyer']), HouseController.deletehouse)


