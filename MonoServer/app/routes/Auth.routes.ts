import express from 'express'
import { AuthController } from '../controllers/Auth.controllers';
import { varifyJwtToken } from '../middleware/verifyJwtMiddleware';
const authRouter = express.Router();


authRouter.post("/signup", AuthController.signup)
authRouter.post("/login", AuthController.login)
authRouter.post("/refreshToken", AuthController.refreshToken)
authRouter.post("/logout", varifyJwtToken, AuthController.logout)

export default authRouter;
