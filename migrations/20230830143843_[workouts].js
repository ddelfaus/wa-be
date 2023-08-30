/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('workouts', function (table) {
        table.increments('workout_id').primary();
        table.integer('user_id').unsigned().references('users.user_id');
        table.string('title').notNullable();
        table.text('description');
        table.integer('difficulty_rating');
        table.integer('upvotes').defaultTo(0);
        table.string('equipment_required');
        // Add other workout fields as needed
        // table.timestamps(true, true);
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('workouts');
};
