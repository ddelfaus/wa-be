/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { username: 'user1', email: 'user1@example.com', password: "derp" },
    { username: 'user2', email: 'user2@example.com', password: "derp2" },
    { username: 'user3', email: 'user3@example.com', password: "derp3" },
    { username: 'user4', email: 'user4@example.com', password: "derp4" },
    { username: 'user5', email: 'user5@example.com', password: "derp5" }
  ]);
};
