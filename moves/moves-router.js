const express = require('express');
const router = express.Router();
const Moves = require('./moves-model');
const authorized = require('../auth/auth-middleware')


router.get('/', (req, res) => {
  

  Moves.getMoves()
    .then(moves => {
      res.status(200).json(moves);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', authorized, (req, res) => {
  const id = req.params.id;
  // const coach_id = req.token.coachID;

  Moves.getMovesById(id)
    .then(moves => {
      res.status(200).json(moves)

      // if (exercise && exercise.coach_id === coach_id) {
      //   res.status(200).json(exercise);
      // } else if (!exercise) {
      //   res.status(404).json({ error: `cannot get exercise with id: ${id} because it does not exist` });
      // } else {
      //   res.status(403).json({ error: `you are not authorized to get exercise with id: ${id}`});
      // }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', authorized, (req, res) => {
  console.log(req.body)

  const moveData = req.body;
  // const user_id = req.token.userId
  Moves.addMoves(moveData)
    .then(move => {
      res.status(201).json(move);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});




router.put('/:id', authorized, (req, res) => {
  const moveData = { ...req.body, id: req.params.id}
 
  console.log(moveData)
  Moves.updateMoves(moveData)
      .then(edit => {
          res.status(201).json(moveData)
      })
      .catch (err => {
          res.status(500).json({ message: "failed, make sure you have all the needed fields and the correct ID"})
      })
})



router.delete('/:id', authorized, (req,res)=> {
  const id = req.params.id

  Moves.deleteMoves(id)
  .then(move => {
      res.status(200).json({ message: "deleted"})
  })
  .catch(err => {
      res.status(500).json({ message: "failed to delete, Make sure you have the right ID"})
  })
})


// // assigning exercises to workouts

// router.get('/e-w/:id', authorized, (req, res) => {
//   const id = req.params.id;
//   Exercises.getExercisesInWorkout(id)
//     .then(exercises => {
//       res.status(200).json(exercises);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

  


// router.post('/e-w', authorized, (req,res) => {
//   const exerciseData = {...req.body}
//   console.log(exerciseData)
//   Exercises.addExercisesToWorkout(exerciseData)
//   .then(exercise => {
//     res.status(201).json(exercise);
//   })  

//   .catch (err => {
//     res.status(500).json({ message: "failed, make sure you have all the needed fields and the correct ID"})
// })
// })
// router.put('/e-w/:id', authorized, (req, res) => {
//   const exerciseData = { ...req.body, id: req.params.id}
  
//   console.log(exerciseData)
//   Exercises.updateExerciseToWorkout(exerciseData)
//       .then(edit => {
//           res.status(201).json(exerciseData)
//       })
//       .catch (err => {
//           res.status(500).json({ message: "failed, make sure you have all the needed fields and the correct ID"})
//       })
// })





// router.delete('/e-w/:id', authorized, (req,res)=> {
//   const id = req.params.id
//   console.log(id)
//   Exercises.deleteExerciseToWorkout(id)
//   .then(exercise => {
//       res.status(200).json({ message: "deleted"})
//   })
//   .catch(err => {
//       res.status(500).json({ message: "failed to delete, Make sure you have the right ID"})
//   })
// })


module.exports = router;