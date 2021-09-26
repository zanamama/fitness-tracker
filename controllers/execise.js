const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("Exercise api endpoint");
});

module.exports = router;
