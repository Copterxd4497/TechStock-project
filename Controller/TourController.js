const Tour = require("./../models/tourModel");

exports.getAllTours = async (req, res) => {
  try {
    let tourObj = { ...req.query };

    let queryStr = JSON.stringify(tourObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    tourObj = JSON.parse(queryStr);

    const AllTour = await Tour.find(tourObj);

    res.status(201).json({
      status: "success",
      length: AllTour.length,
      data: {
        tour: AllTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        tour: err.message,
      },
    });
  }
};

exports.getTours = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        tour: tour,
      },
    });
  } catch (err) {
    res.status(201).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

exports.createTours = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

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

exports.updataTour = async (req, res) => {
  try {
    const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "sucess",
      data: {
        tour: updateTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteTour_usingQuery = async (req, res) => {
  try {
    const thatone = Tour.find(req.query);
    const special_param = thatone._id;

    const deleteTour = await Tour.findOneAndDelete(special_param);

    res.status(204).json({
      status: "sucess",
      data: {
        tour: deleteTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const deleteTour = await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "sucess",
      data: {
        tour: deleteTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
