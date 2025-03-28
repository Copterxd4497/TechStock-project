const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  initials: {
    type: String,
    require: [true, "A tour must have a initials "],
    trim: true,
    maxlength: [5, "An initials must have less or equal than 5"],
    minlength: [1, "An initials must have more or equal than 1"],
  },
  full_name: {
    type: String,
    require: [true, "A board much have full_name"],
    trim: [true],
  },
  country: {
    type: String,
    require: [true, "A Stock must have Registered Country"],
    trim: [true],
    enum: {
      values: ["Thailand", "USA", "UK", "China", "France"],
      message: "coutry must be either: one of registered countries",
    },
  },
  sector: {
    type: String,
    require: [true, "A stock must have sector"],
  },
  industry: {
    type: String,
    require: [true, "A stock must have industry"],
  },
  PE: {
    type: Number,
    require: [true, "A stock must have a p/e"],
  },
  price: {
    type: Number,
    require: [true, "Stock must have a price"],
  },
  Available_Stock: {
    type: Number,
    require: [
      true,
      "Each stock must have its amount of avaiable stock in the market",
    ],
  },
  amountOFmoney: {
    type: Number,
  },
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
