const express = require("express");
const router = express.Router();
const layoutController = require("../controllers/layoutController");
const formController = require("../controllers/formController");

router.get("/", layoutController.showLayout);
router.get("/forms", formController.sendForm);

module.exports = router;