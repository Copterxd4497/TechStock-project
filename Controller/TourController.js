const Tour = require("./../models/tourModel");

exports.getAllTours = (req, res) => {};

exports.getTours = async (req, res) => {};

exports.createTours = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    // Reorder fields so `_id` appears first
    const reorderedTour = {
      _id: newTour._id, // Move `_id` to the top
      ...newTour.toObject(), // Spread the rest of the properties
    };

    res.status(201).json({
      status: "success",
      data: {
        tour: reorderedTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updataTour = (req, res) => {};

exports.deleteTour = (req, res) => {};
