export function up(knex) {
    return knex.raw(`
      ALTER TABLE User 
      MODIFY COLUMN role ENUM('Seller', 'Buyer', 'Admin') 
      NOT NULL DEFAULT 'Buyer'
    `);
  }
  
  export function down(knex) {
    return knex.raw(`
      ALTER TABLE User 
      MODIFY COLUMN role VARCHAR(255)
    `);
  }
  