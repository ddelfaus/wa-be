const db = require('../database/dbConfig.js');


module.exports = {
  getMoves,
  getMovesById,
  getMoveByMoveId,
  addMoves,
  updateMoves,
  deleteMoves,
  addMovesToWorkout,
  getMovesInWorkout,
  deleteMovesToWorkout,
  updateMovesToWorkout
};

function getMoves() {
    return db('moves')
    
  }
  
  function getMovesById(id) {
    return db('moves')
      .where({ user_id: id})
     
  }

  //get a specific move
  function getMoveByMoveId(moveId) {
    return db('moves').where({ id: moveId });
  }

  
  function addMoves(moves) {
    return db
      .insert(moves, 'id')
      .into('moves')
 
  }
  
  function updateMoves(moves) {
    return db('moves')
      .where({id: moves.id})
      .update(moves)
      .then(() => {
        return getMovesById(moves.id)
    })
  }
  


  function deleteMoves(moves) {
    return db('moves')
      .where('id',moves)
      .del();
}



// mo-wo


function getMovesInWorkout(id) {
  return db('moves_workouts')
  .where({ workout_id: id})
   
}

function addMovesToWorkout(movesWorkout){
  return db('moves_workouts')
  .insert(movesWorkout, 'id')
  .into('moves_workouts')
}

function updateMovesToWorkout(moves) {
  return db('moves_workouts')
    .where({id: moves.id})
    .update(moves)
  //   .then(() => {
  //     return getExerciseById(exercise.id)
  // })
}

function deleteMovesToWorkout(moveseWorkout) {
  return db('moves_workouts')
    .where('id',movesWorkout)
    .del();
}
