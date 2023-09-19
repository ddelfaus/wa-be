/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('moves').del()
  await knex('moves').insert([
      { workout_id: 1223, title: 'Move 1', description: 'Description 1', difficulty_rating: 3, muscle_group: 'Legs', weight_used: '20 lbs', equipment_required: 'Dumbbells' },
      { workout_id: 2224, title: 'Move 2', description: 'Description 2', difficulty_rating: 4, muscle_group: 'Back', weight_used: 'Resistance Band', equipment_required: 'Resistance Bands' },
      { workout_id: 3421, title: 'Move 3', description: 'Description 3', difficulty_rating: 2, muscle_group: 'Core', weight_used: 'Bodyweight', equipment_required: 'None' },
      { workout_id: 4231, title: 'Move 4', description: 'Description 4', difficulty_rating: 5, muscle_group: 'Chest', weight_used: '50 lbs', equipment_required: 'Barbell' },
      { workout_id: 52323, title: 'Move 5', description: 'Description 5', difficulty_rating: 3, muscle_group: 'Arms', weight_used: '15 lbs', equipment_required: 'Dumbbells' }
  ]);
};
