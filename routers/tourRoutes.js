const express = require("express");
const router = express.Router();

const tourController = require("../Controller/TourController");

//Sample of Middlware
//router.param("id", tourController.checkID);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTours)
  .delete(tourController.deleteTour_usingQuery);

router
  .route("/:id")
  .get(tourController.getTours)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
