export function up(knex) {
    return knex.schema.alterTable('images', function(table) {
      table.renameColumn('url', 'path');
    });
  };
  
  export function down (knex) {
    return knex.schema.alterTable('images', function(table) {
      table.renameColumn('path', 'url');
    });
  };
  
