const fs = require("fs");
const path = require("path");

// this is autual locatoin of the file (not its content)
const filePath = path.join(__dirname, "../dev-data/data/tours-simple.json");
let data = JSON.parse(fs.readFileSync(filePath));
let user_data = null;

//This is middleware to check route parameter
exports.checkID = (req, res, next, val) => {
  const id = req.params.id;
  const tour = data.find((el) => el.id === id);

  if (req.params.id * 1 > data.length) {
    return res.status(404).json({
      status: "failed",
      message: `not found ${req.params.id}`,
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    message: "you are a bitch",
    number: Object.keys(data).length,
    data: data,
  });
};

exports.getTours = (req, res) => {
  const id = Number(req.params.id); // Convert id to a number

  // Find the tour by ID
  const tour = data.find((el) => el.id === id);

  // Return the tour data
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.createTours = (req, res) => {
  let { num1, num2, num3, name, price } = req.body;
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return res.status(400).json({ error: "data is not number" });
  }
  user_data = num1 + num2 + num3;

  // Generate new unique ID
  const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

  const newUser = {
    id: newId,
    name: name || "Unnamed Tour",
    price: price || 0,
    sum: user_data,
  };

  data.push(newUser); // Add new user

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(201).json({
    message: "data received",
    list: data.length,
    id: newId,
    sum: user_data,
  });
};

exports.updataTour = (req, res) => {
  const id = Number(req.params.id);
  const updataData = req.body;

  const tour = data.findIndex((el) => el.id === id);

  data[tour] = { ...data[tour], ...updataData };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(200).json({
    message: "data updated",
  });
};

const box = null;
exports.deleteTour = (req, res) => {
  const id = Number(req.params.id);
  const num = id - 1;
  const tourIndex = data.findIndex((el) => el.id === id);
  const tour = data.find((el) => el.id === id);
  const box = tour;

  // Remove the tour from the array
  data.splice(tourIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  // Reload the data to keep it in sync with the file
  data = JSON.parse(fs.readFileSync(filePath));

  res.status(200).json({
    message: "data deleted",
    data: {
      box,
    },
  });
};
