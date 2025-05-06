// 20250427XXXXXX_make_user_id_unsigned.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.alterTable('User', (table) => {
      table.integer('id').unsigned().alter(); // 🔥 ALTER existing id to be unsigned
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.alterTable('User', (table) => {
      table.integer('id').alter(); // 🧹 Rollback: remove unsigned if needed
    });
  }
  