import express from "express"
import session from 'express-session';

import cors from "cors"
import passport from "./config/googleAuth.config";
import { sessionSecret } from "./utility/Constant.utility"


//Imports for Routers
import userRouter from "./routes/User.routes"
import approuter from "./routes/App.routes";
import authRouter from "./routes/Auth.routes"
import { houseRouter } from "./routes/House.routes";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())
app.use(session({
    secret: sessionSecret, // Use a strong secret key
    resave: false,
    saveUninitialized: true,
}));



// Middleware for Passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/eyrie/api/v1/users", userRouter)
app.use("/eyrie/api/v1/app", approuter)
app.use("/eyrie/api/v1/auth", authRouter)
app.use("/eyrie/api/v1/house", houseRouter)

export default app




