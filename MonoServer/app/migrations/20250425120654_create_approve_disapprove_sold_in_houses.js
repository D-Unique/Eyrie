
export function up(knex) {
    return knex.schema.alterTable('houses', function (table) {
        table.enu('status', ['pending', 'approved', 'disapproved', 'sold']).defaultTo('pending');
    })
  
};


export function down(knex) {
    return knex.schema.alterTable('houses', function (table) {
        table.dropColumn('status');
      });
  
};
