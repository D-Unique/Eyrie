import express from 'express'
import { AuthController } from '../controllers/Auth.controllers';
import { varifyJwtToken } from '../middleware/verifyJwtMiddleware';
import passport from 'passport';
const authRouter = express.Router();


authRouter.post("/signup", AuthController.signup)
authRouter.post("/login", AuthController.login)
authRouter.post("/refreshToken", AuthController.refreshToken)
authRouter.post("/logout", varifyJwtToken, AuthController.logout)
authRouter.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}))
  
authRouter.get('/google/callback', passport.authenticate('google'), (req, res) => {
    const user = req.user
    res.json( user );

}
    );

export default authRouter;
