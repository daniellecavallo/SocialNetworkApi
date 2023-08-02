const router = require("express").Router();
const Thought = require("../models/Thought")

router.get("/", async (req, res) => {
  const allThoughts = await Thought.find({})

  res.json(allThoughts)
})

module.exports = router