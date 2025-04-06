import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';
import { Connection } from 'mysql2/promise';
// import config from "../config/db.config"
// import { dbConfigType } from "../interface/Config.interface"
dotenv.config();

// const environment: keyof dbConfigType = process.env.NODE_ENV === 'production' ? 'production' : 'development';
// const dbConfig = config[environment]

// const mysqlConnection = mysql2.createConnection(`mysql://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);


class ManageMysqlDB {
    private mysqlConnection: Connection | null = null;
     private async connectmysqlDb() {
      try {
        // Create a promise-based connection
          this.mysqlConnection = await mysql2.createConnection({
          host: process.env.MYSQL_DATEBASE_HOST, // Should resolve to 'mysqlDb' in the Docker network
          user: process.env.MYSQL_DATABASE_USER, // Eyrie
          password: process.env.MYSQL_DATEBASE_PASSWORD, // Eyrie12345
          database: process.env.MYSQL_DATEBASE_NAME, // Your database name
          port: 3306,
        });    
      }
      catch (err) {
        console.error(`errror connecting to mysqldb ${err}`)
      } 
  }
  
  async getConnection(): Promise<mysql2.Connection> {
    if (this.mysqlConnection === null) {
      // Only try to connect if there's no existing connection
      await this.connectmysqlDb();
    }
    
    // Check if the connection is still null after attempting to connect
    if (this.mysqlConnection === null) {
      throw new Error("MySQL connection is not available");
    }

    return this.mysqlConnection;
  }


}

export async function checkDatabaseConnection() {
  try {
    const mysqlConnection = await new ManageMysqlDB().getConnection();
      // Ping the database to check if it is up
      await mysqlConnection.ping();
      console.log('MysqlDb is up and running!');
  } catch (err) {
    console.error('Error connecting to the mysql database:', err);
  }
}

const createTableQuery = `
  CREATE TABLE \`User\` (
    \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    \`first_name\` VARCHAR(25) COLLATE utf8mb4_unicode_ci NOT NULL,
    \`last_name\` VARCHAR(25) COLLATE utf8mb4_unicode_ci NOT NULL,
    \`password\` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    \`email\` VARCHAR(25) COLLATE utf8mb4_unicode_ci NOT NULL UNIQUE,
    \`role\` VARCHAR(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Buyer',
    \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`;

const dropTableQuery = `
  DROP TABLE \`User\` 
`;

export class ManageMysqlTables {
  
  private static async getConnection() {
   return await new ManageMysqlDB().getConnection();
  }

  static async createMysqlDbTables() {
    try {
      const mysqlConnection = await this.getConnection()
      // Await the MySQL query to create the table
      await mysqlConnection.query(createTableQuery);
    } catch (error) {
      // Log any errors that occur during the query execution
      throw new Error (`Error creating table:, ${error}`);
    }
  }

  static async dropMysqlDbTables() {
    try {
      const mysqlConnection = await this.getConnection()
      await mysqlConnection.query(dropTableQuery) 
    }
    catch (err) {
      throw new Error(`Error dropping table: , ${err}`);
      

    }
       
      }
}


export const manageMysqlDB = new ManageMysqlDB()
