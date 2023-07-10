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

// GREETINGS ROUTE
app.get("/greetings/:name", (req, res) => {
  const name = req.params.name;
  res.send(`hello ${name}`)
});

app.get("/addNumbers/:num1/:num2", (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;

  const addingNums = Number(num1) + Number(num2);
  const product = Number(num1) * Number(num2);
  console.log(addingNums, product);

  // const obj = {
  //   "addingNums": addingNums,
  //   "product": product
  // }

  // res.send(obj)

  res.send({ "addingNums" : addingNums, "product": product});

});

app.get("/checkIfItsDivisible/:num1/:num2", (req, res) => {
  try {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    // validations
    if (isNaN(num1)) {
      throw `${num1} is not a number`
    }
    if (isNaN(num2)) {
      throw `${num2} is not a number`
    }

    const remainder = num2 % num1;
    if (remainder === 0) {
      res.send(`${num2} is divisible by ${num1}`);
    } else {
      res.send(`${num2} is not divisible by ${num1}`);
    }

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

});

app.get("/checkIfStrContainsAVowel/:word", (req, res) => {
  let word = req.params.word;

  const vowels = "aeiou";
  let boolean = false;

  for (let char of word) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      boolean = true;
      break;
    }
    console.log(char);
  }

  res.send(boolean ? `${word} contains a vowel` : `${word} does not contain a vowel`);
})

// EXPORT
module.exports = app;