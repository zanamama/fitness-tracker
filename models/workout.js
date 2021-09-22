const mongoose = mongoose.mongoose;
const { Schema } = mongoose;

exercises: [
  {
    type: {
      type: String,
      trim: true,
      required: "Enter a type for the exercise",
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a name for the exercise",
    },
    duration: {
      type: Number,
      required: "please enter duration",
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    distance: {
      type: Number,
    },
  },
];

module.exports = Workout;