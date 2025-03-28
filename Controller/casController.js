const Tour = require("./../models/tourModel");

exports.updateTour_stocks = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    const updateBody = req.body.amountOFmoney;

    tour.Available_Stock = tour.Available_Stock - updateBody;
    await tour.save();

    res.status(200).json({
      status: "sucess",
      data: {
        tour: tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
