const express = require('express');
const router = express.Router();
const Workouts = require('./workouts-model');
const authorized = require('../auth/auth-middleware')


router.get('/', (req, res) => {
  

  Workouts.getWorkouts()
    .then(workout => {
      res.status(200).json(workout);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', authorized, (req, res) => {
  const id = req.params.id;
  // const coach_id = req.token.coachID;

  Workouts.getWorkoutsById(id)
    .then(workout => {
      res.status(200).json(workout)
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/workout/:workoutId', authorized, async (req, res) => {
  const { workoutId } = req.params;

  try {
    // Call the getMoveById method from your move model
    const workout = await Workouts.getSingleWorkout(workoutId);

    if (!workout) {
      return res.status(404).json({ message: 'Move not found' });
    }

    // Return the move data as JSON
    res.status(200).json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/', authorized, (req, res) => {
  console.log(req.body)

  const workoutData = req.body;
  // const user_id = req.token.userId
  Workouts.addWorkouts(workoutData)
    .then(workout => {
      res.status(201).json(workout);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});




router.put('/:id', authorized, (req, res) => {
  const workoutData = { ...req.body, id: req.params.id}
 
  console.log(workoutData)
  Workouts.updateWorkouts(workoutData)
      .then(edit => {
          res.status(201).json(edit)
      })
      .catch (err => {
          res.status(500).json({ message: "failed, make sure you have all the needed fields and the correct ID"})
      })
})



router.delete('/:id', authorized, (req,res)=> {
  const id = req.params.id

  Workouts.deleteWorkouts(id)
  .then(exercise => {
      res.status(200).json({ message: "deleted"})
  })
  .catch(err => {
      res.status(500).json({ message: "failed to delete, Make sure you have the right ID"})
  })
})





module.exports = router;