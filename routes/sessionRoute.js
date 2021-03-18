const express = require("express")
router = express.Router()
sessionsRoute = require("../controllers/sessionControllers")

router.get("/", sessionsRoute.sessionController)

module.exports = router