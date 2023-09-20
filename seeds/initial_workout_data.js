/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('workouts').del()
  await knex('workouts').insert([
    { title: 'Workout 1', description: 'Description 1', difficulty_rating: 3, equipment_required: 'Dumbbells' },
    { title: 'Workout 2', description: 'Description 2', difficulty_rating: 4, equipment_required: 'Resistance Bands' },
    { title: 'Workout 3', description: 'Description 3', difficulty_rating: 2, equipment_required: 'None' },
    { title: 'Workout 4', description: 'Description 4', difficulty_rating: 5, equipment_required: 'Barbell' },
    { title: 'Workout 5', description: 'Description 5', difficulty_rating: 3, equipment_required: 'Dumbbells' }
  ]);
};
