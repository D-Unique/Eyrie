export interface dbConfigType {
    development: {
        username: string
        password: string
        database: string
        host: string
        port: number
        dialect: string
        logging: string
    },
    production: {
        username: string
        password: string
        database: string
        host: string
        port: number
        dialect: string
        logging: boolean
        dialectOptions: {
            ssl: {
                require: boolean
                rejectUnauthorized: boolean
            },
            connectionTimeoutMillis: number
            idleTimeoutMillis: number
            requestTimeoutMillis: number
        },
    },

}
