const db = require('../database/dbConfig.js');


module.exports = {
  getWorkouts,
  getWorkoutsById,
  getSingleWorkout,
  addWorkouts,
  updateWorkouts,
  deleteWorkouts,
  // exercise to workout
  getExerciseInWorkout,
  addExercisesToWorkout,
  updateExerciseToWorkout,
  deleteExerciseToWorkout,


};



function getWorkouts() {
    return db('workouts')
    
  }
  
function getWorkoutsById(id) {
  return db('workouts')
    .where({ user_id: id})

}
function getSingleWorkout(workoutId){
  return db('workouts')
    .where({id: workoutId})
   
}
function addWorkouts(workout) {
  return db
    .insert(workout, 'id')
    .into('workouts')

}

function updateWorkouts(workout) {
  console.log(workout, "in model")
  return db('workouts')
    .where({id: workout.id})
    .update(workout)
    .then(() => {
      return getWorkoutsById(workout.id)
  })
}

function deleteWorkouts(workout) {
  return db('workouts')
      .where('id',workout)
      .del();
}


// assigin exercise to workout


function addExercisesToWorkout(exerciseWorkout){
  return db('workout_exercise')
  .insert(exerciseWorkout, 'id')
  .into('workout_exercise')
}

function getExerciseInWorkout(id) {
  return db('workout_exercise')
  .where({ workout_id: id})
   
}

function updateExerciseToWorkout(moves) {
  return db('workout_exercise')
    .where({id: moves.id})
    .update(moves)

}



function deleteExerciseToWorkout(exerciseWorkout) {
  return db('workout_exercise')
    .where('id',exerciseWorkout)
    .del();
}