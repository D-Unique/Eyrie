import config from "./config/app.config"
import app from "./app"

const environment= process.env.NODE_ENV === 'production' ? 'production' : 'development';  
const appConfig = config[environment];
const port = appConfig.port


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});
