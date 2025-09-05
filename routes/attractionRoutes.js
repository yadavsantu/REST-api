const express = require("express");
const { createAttraction, getAllAttractions } = require("../controllers/attractionController");

const router = express.Router();

router.route("/")
  .get(getAllAttractions)  // GET /api/v1/attractions
  .post(createAttraction); // POST /api/v1/attractions

module.exports = router;