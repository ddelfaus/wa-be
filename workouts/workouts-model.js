const db = require('../database/dbConfig.js');


module.exports = {
  getWorkouts,
  getWorkoutsById,
  getSingleWorkout,
  addWorkouts,
  
  updateWorkouts,
  deleteWorkouts,
  addWorkoutToProgram,
  getWorkoutToProgram,
  deleteWorkoutToProgram,
  updateWorkoutToProgram
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


// ex-pro


function getWorkoutToProgram(id) {
  return db('exercises_workouts')
  .where({ workout_id: id})
   
}

function addWorkoutToProgram(exerciseWorkout){
  return db('exercises_workouts')
  .insert(exerciseWorkout, 'id')
  .into('exercises_workouts')
}

function updateWorkoutToProgram(exercise) {
  return db('exercises_workouts')
    .where({id: exercise.id})
    .update(exercise)

}

function deleteWorkoutToProgram(exerciseWorkout) {
  return db('exercises_workouts')
    .where('id',exerciseWorkout)
    .del();
}




// wo-p


function getWorkoutToProgram(id) {
  return db('workouts_programs')
  .where({ workout_id: id})
   
}

function addWorkoutToProgram(workoutProgram){
  return db('workouts_programs')
  .insert(workoutProgram, 'id')
  .into('workouts_programs')
}

function updateWorkoutToProgram(workouts) {
  return db('workouts_programs')
    .where({id: workouts.id})
    .update(workouts)
  //   .then(() => {
  //     return getExerciseById(exercise.id)
  // })
}

function deleteWorkoutToProgram(workoutProgram) {
  return db('workouts_programs')
    .where('id',workoutProgram)
    .del();
}