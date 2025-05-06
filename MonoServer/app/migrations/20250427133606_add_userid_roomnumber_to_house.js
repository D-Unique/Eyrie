/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.alterTable('houses', table => {
        table.integer('user_id').unsigned(); 
        table.integer('num_bedrooms');
        table.integer('num_bathrooms');
        table.integer('square_ft');
        table.integer('price')
        table.foreign('user_id').references('id').inTable('User');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.alterTable('houses', table => {
        table.dropForeign(['user_id']); 
        table.dropColumn('user_id');
        table.dropColumn('num_bedrooms');
        table.dropColumn('num_bathrooms');
    });
}
