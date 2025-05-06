import express from 'express'
import UserController from '../controllers/User.controllers'
import { varifyJwtToken } from '../middleware/verifyJwtMiddleware';
import { roleGuard } from '../middleware/roleGuard';
// import fileupload from "../middleware/uploadVideoImage";
// import fileExtLimiter from "../middleware/fileExtLimiter";
// import fileSizeLimiter from "../middleware/fileSizeLimiter";
// import filePayloadExists from "../middleware/filePayloadExist";
const userRouter = express.Router();



userRouter.get("/buyers", varifyJwtToken, roleGuard(['Buyer', 'admin', 'seller']), UserController.buy)
userRouter.get("/admin", varifyJwtToken, roleGuard(['admin']), UserController.admin)
userRouter.get("/admin/approve/:houseId", varifyJwtToken, roleGuard(['admin', 'Buyer']), UserController.approve)
// userRouter.get("/admin/approve", varifyJwtToken, roleGuard(['admin', 'seller', 'Buyer']), fileupload, filePayloadExists, fileExtLimiter(['.jpg', '.png', '.jpeg']), fileSizeLimiter,writeFileToFileSystem, UserController.approve)
userRouter.get("/admin/disapprove", varifyJwtToken, roleGuard(['admin']), UserController.disapprove)
userRouter.get("/sellers/lebelledsold/:houseId", varifyJwtToken, roleGuard(['admin', 'seller']), UserController.lebelledsold)


export default userRouter;


