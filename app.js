const express = require("express");
const app = express();
const timemiddleware = require("./middleware/timeMiddleware");

const tourRoute = require("./routers/tourRoutes");
const casRoute = require("./routers/casRoutes");

//Middleware
app.use(express.json());
app.use(timemiddleware.timeUser);

//in case user access into other public files
app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === "development") {
  console.log("You are currently using developed mode");
  console.log("Dubuging mode currently start");
} else if (process.env.NODE_ENV === "production") {
  console.log("You are currently using product mode");
}
//routers
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/CAS", casRoute);

module.exports = app;
