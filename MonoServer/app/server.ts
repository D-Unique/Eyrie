import config from "./config/app.config"
import app from "./app"

//Imports for Routers
import userRouter from "./routes/User.routes"
import Approuter from "./routes/App.routes";

const environment= process.env.NODE_ENV === 'production' ? 'production' : 'development';  
const appConfig = config[environment];
const port = appConfig.port

app.use("/eyrie/api/v1/users", userRouter)
app.use("/eyrie/api/v1/app", Approuter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
