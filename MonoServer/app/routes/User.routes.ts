import express from 'express'
import UserController from '../controllers/User.controllers'
const userRouter = express.Router();


userRouter.post("/signup",  UserController.signup)

export default userRouter;


