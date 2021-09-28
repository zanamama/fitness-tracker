const router = require("express").Router();
const Workouts = require("../models/workouts");

//4 routes needed

//Get
router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .then((workouts) => {
      const lastWorkout = workouts[workouts.length - 1];
      let sum = 0;
      lastWorkout.exercises.forEach((exercise) => {
        sum += exercise.duration;
      });
      lastWorkout.totalDuration = sum;
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Put

//Post

//Get

router.get("/", (req, res) => {
  res.json("Updated Exercise");
});

module.exports = router;
