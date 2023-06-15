const express = require('express');
const router = express.Router();

const doesItContainAVowel = require("../utils/doesItContainAVowel");

router.get("/:word", (req, res) => {
    let { word } = req.params;
    res.send(doesItContainAVowel(word));
});

module.exports = router;