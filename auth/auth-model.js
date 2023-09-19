const db = require('../database/dbConfig.js');


module.exports = {

    add,
    findBy
   
}


// async function add(user) {
//     return db('users')
//     .insert(user, 'id')
// }

async function add(user) {
  
    try {
      const [id] = await db('users').insert(user, 'id');
      return id;
    } catch (error) {
      throw error;
    }
  }


function findBy(filter) {
    return db('users').where(filter);
  }