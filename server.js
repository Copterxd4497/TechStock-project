require("dotenv").config({ path: "./config.env" }); // Load environment variables only once
const app = require("./app");

const port = process.env.PORT || 8000;
console.log("Hello world");

app
  .listen(port, () => {
    console.log(`Application running on port ${port}`);
  })
  .on("error", (err) => {
    console.log("Server failed to start", err);
  });
