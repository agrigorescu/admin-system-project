const express = require("express");
const router = express.Router();
const beeController = require("../controllers/beeController");


router.post("/run-bee", beeController.runBee);


module.exports = router;