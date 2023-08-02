const router = require("express").Router();
const userAPI = require("./userApi")
const thoughtAPI = require("./thoughtApi")


router.use("/api/users", userAPI)
router.use("/api/thoughts", thoughtAPI)


module.exports = router