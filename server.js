const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); // Load environment variables only once
const mongoose = require("mongoose");

const app = require("./app");

//swap <db_password> to DATABASEPASSWORD
const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASEPASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connect successfully"))
  .catch((err) => console.err("Db connection error", err));

const port = 5000;
console.log("Hello world");

app
  .listen(port, () => {
    console.log(`Application running on port ${port}`);
  })
  .on("error", (err) => {
    console.log("Server failed to start", err);
  });
