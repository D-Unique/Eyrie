/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'mysql2',
    connection: {
      // host: 'mysqlDb',
      user: 'root',
      password: 'rootpassword',
      database: 'EyrieMysqlDb'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
