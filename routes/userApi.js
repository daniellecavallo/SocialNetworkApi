const router = require("express").Router();
const User = require("../models/User")

router.get("/", async (req, res) => {
  const allUsers = await User.find({})

  res.json(allUsers)
})

module.exports = router