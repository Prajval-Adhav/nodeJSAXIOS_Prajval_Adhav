const rocketController = require("../controllers/rocketController");
const express = require("express");
const router = express.Router();

router.post("/", rocketController.addAllRockets);
router.get("/all", rocketController.getAllRockets);


module.exports = router;
