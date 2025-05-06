/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.alterTable('User', function (table) {
        table.enu('role', ['Seller', 'Buyer', 'Admin']).notNullable().defaultTo('Buyer');
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
    return knex.schema.alterTable('User', function (table) {
        table.dropColumn('role');
    })
  
};
