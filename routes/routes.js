const express = require("express");
const router = express.Router();
const layoutController = require("../controllers/layoutController");


router.get("/", layoutController.showLayout);


module.exports = router;