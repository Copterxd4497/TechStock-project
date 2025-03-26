const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  initials: {
    type: String,
    require: [true, "A tour must have a initials "],
    unique: true,
    trim: true,
    maxlength: [5, "An initials must have less or equal than 5"],
    minlength: [1, "An initials must have more or equal than 1"],
  },
  full_name: {
    type: String,
    require: [true, "A board much have full_name"],
    trim: [true],
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
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
