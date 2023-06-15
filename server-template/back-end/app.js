// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// controllers
const collatzController = require("./controllers/collatzController");
const repeatNTimesController = require("./controllers/repeatNTimesController");
const capitalizeFirstLetterController = require("./controllers/capitalizeFirstLetterController");
const doesItContainAVowelController = require("./controllers/doesItContainAVowelController");
const consecutiveVowelsController = require("./controllers/consecutiveVowelsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// controllers Middleware
app.use("/collatz", collatzController);
app.use("/repeatNTimesWithSpace", repeatNTimesController);
app.use("/capitalizeFirstLetter", capitalizeFirstLetterController);
app.use("/doesItContainAVowel", doesItContainAVowelController);
app.use("/consecutiveVowels", consecutiveVowelsController);


// ROUTES



app.get("/", (req, res) => {
  res.send("Welcome to express template");
});

// EXPORT
module.exports = app;