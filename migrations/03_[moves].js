/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('moves', function (table) {
        table.increments('move_id').primary();
        table.integer('workout_id').unsigned().references('workouts.workout_id');
        table.string('title').notNullable();
        table.text('description');
        table.integer('difficulty_rating');
        table.string('muscle_group');
        table.string('weight_used');
        table.string('equipment_required');
        table.string('video_url'); // Store URL or ID for YouTube video
        table.integer('reps_completed').defaultTo(0);
        // Add other move fields as needed
        // table.timestamps(true, true);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('moves');
};
