import config from "./config/app.config"
import app from "./app"

//Imports for Routers
import userRouter from "./routes/User.routes"
import approuter from "./routes/App.routes";
import authRouter from "./routes/Auth.routes"

const environment= process.env.NODE_ENV === 'production' ? 'production' : 'development';  
const appConfig = config[environment];
const port = appConfig.port

app.use("/eyrie/api/v1/users", userRouter)
app.use("/eyrie/api/v1/app", approuter)
app.use("/eyrie/api/v1/auth", authRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});
