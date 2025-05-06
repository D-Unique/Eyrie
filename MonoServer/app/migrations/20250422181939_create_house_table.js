/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// /migrations/2025-04-22_create_house_video_image_tables.js

export function up(knex) {
    // Create the house table
    return knex.schema.createTable('houses', function(table) {
      table.increments('id').primary();         // Auto-incremented house id
      table.string('name').notNullable();       // Name of the house
      table.text('description');                // Description of the house
      table.string('address').notNullable();    // Address of the house
      table.timestamps(true, true);              // Created_at and updated_at
    })
    .then(() => {
      // Create the video table
      return knex.schema.createTable('videos', function(table) {
        table.increments('id').primary();         // Auto-incremented video id
        table.string('title').notNullable();      // Title of the video
        table.string('path').notNullable();        // URL for the video
        table.integer('house_id').unsigned().references('id').inTable('houses').onDelete('CASCADE'); // FK to house
        table.timestamps(true, true);             // Created_at and updated_at
      });
    })
    .then(() => {
      // Create the image table
      return knex.schema.createTable('images', function(table) {
        table.increments('id').primary();         // Auto-incremented image id
        table.string('url').notNullable();        // URL for the image
        table.integer('house_id').unsigned().references('id').inTable('houses').onDelete('CASCADE'); // FK to house
        table.timestamps(true, true);             // Created_at and updated_at
      });
    });
};
  


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


  export function down (knex) {
    // Rollback the migrations: drop the tables in reverse order
    return knex.schema
      .dropTableIfExists('images')
      .then(() => knex.schema.dropTableIfExists('videos'))
      .then(() => knex.schema.dropTableIfExists('houses'));
  };
  

