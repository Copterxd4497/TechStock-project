const express = require("express");
const router = express.Router();

const tourController = require("../Controller/TourController");

//Sample of Middlware
//router.param("id", tourController.checkID);
router.route("/:id").patch(tourController.updateTour_stocks);

module.exports = router;
