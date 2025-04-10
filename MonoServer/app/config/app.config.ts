import dotenv from "dotenv"

dotenv.config()

const config = {
    development : {
        port: process.env.APP_PORT
    },

    production: {
        port: process.env.APP_PORT
    }
}

export default config
