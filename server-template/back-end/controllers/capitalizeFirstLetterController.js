const express = require('express');
const router = express.Router();

const capitalizeFirstLetter = require("../utils/capitalizeFirstLetter");

router.get("/:word", (req, res) => {
    let {word} = req.params;
    res.send(String(capitalizeFirstLetter(word)))
})

module.exports = router;