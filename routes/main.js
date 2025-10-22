// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!"));

// About Page Route
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));

// Contact Page Route
router.get("/contact", (req, res) =>
  res.send("<h1>This is the contact page</h1>")
);

// Date Page Route
router.get("/date", (req, res) => {
  // A date variable set as current date and time
  const date = new Date();

  // Formats the date/time to make readable
  const todaysDate = date.toLocaleString();
  res.send(`<h1> Todays Date is: ${todaysDate}</h1>`);
});

/* Welcome Page Route with user inputting a name
e.g. http://www.doc.gold.ac.uk/usr/153/welcome/lorien  */
router.get("/welcome/:name", (req, res) => {
  // A usersName variable storing name from url
  const usersName = req.params.name;

  // Inserts URL name
  res.send(`<h1>Welcome ${usersName}</h1>`);
});

// Chain Route
router.get("/chain", (req, res, next) => {
  console.log("The First Page");
  //It passes to the next chain
  next();
});

router.get("/chain", (req, res) => {
  console.log("The Second Page");
  res.send("<h1>The chain has worked :0</h1>");
});

// File Route
router.get("/file", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "a.html"))
);

// Export the router object so index.js can access it
module.exports = router;
