/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('user_id').primary();
        table.string('username').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable(); // Store hashed passwords
        // Add other user fields as needed
        // table.timestamps(true, true);
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
