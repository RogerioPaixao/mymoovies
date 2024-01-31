const express = require("express");
const router = express.Router();
const MooviesController = require("../controllers/categoryController");

router.get("/", MooviesController.findAll);
router.get("/:id", MooviesController.find);
router.post("/", MooviesController.create);
router.delete("/:id", MooviesController.delete);

module.exports = router;