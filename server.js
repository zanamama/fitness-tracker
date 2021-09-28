const express = require("express");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const PORT = process.env.PORT || 3001;

const app = express();

const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {},
};
app.use(session(sess));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}`);
});
