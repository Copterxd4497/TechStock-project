const express = require("express");
const router = express.Router();

const tourController = require("../Controller/TourController");

//Sample of Middlware
//router.param("id", tourController.checkID);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTours)
  .delete(tourController.deleteTour);

router
  .route("/:id")
  .get(tourController.getTours)
  .patch(tourController.updataTour);

module.exports = router;
