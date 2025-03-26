const express = require("express");
const router = express.Router();

const tourController = require("../Controller/TourController");

//Sample of Middlware
//router.param("id", tourController.checkID);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTours);

router
  .route("/:id")
  .get(tourController.getTours)
  .patch(tourController.updataTour)
  .delete(tourController.deleteTour);

module.exports = router;
