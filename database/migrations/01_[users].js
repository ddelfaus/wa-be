/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('')
        table.string('username',255).unique().notNullable();
        table.string('email', 255).unique().notNullable();
        table.string('password',255).notNullable(); // Store hashed passwords
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
