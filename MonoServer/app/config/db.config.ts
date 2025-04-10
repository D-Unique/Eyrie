import dotenv from "dotenv"

dotenv.config(); 


const config = {
    development: {
        username: process.env.MYSQL_DATABASE_USER,
        password: process.env.MYSQL_DATEBASE_PASSWORD,
        database: process.env.MYSQL_DATEBASE_NAME,
        host: process.env.MYSQL_DATEBASE_HOST,
        port: 3306,
        dialect: "mysql",
        logging: false,
    },
    production: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        port: 3306,
        dialect: "mysql",
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            connectionTimeoutMillis: 5000,
            idleTimeoutMillis: 30000,
            requestTimeoutMillis: 15000,
        },
    },
};

export default config;
