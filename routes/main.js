// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!"));

router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));

router.get("/contact", (req, res) =>
  res.send("<h1>This is the contact page</h1>")
);

router.get("/date", (req, res) => {
  const date = new Date();
  const todaysDate = date.toLocaleString();
  res.send(`<h1> Todays Date is: ${todaysDate}</h1>`);
});

router.get("/welcome/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`<h1>Welcome ${userName}</h1>`);
});

router.get("/chain", (req, res, next) => {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});
router.get("/chain", (req, res,) => {
  console.log("Accessing the secret section ...");
  res.send("<h1>Chained Route</h1>")
});

// Export the router object so index.js can access it
module.exports = router;
