const express = require('express');
const router = express.Router();

const consecutiveVowels = require("../utils/consecutiveVowels");

router.get("/:word", (req, res) => {
    let {word} = req.params;
    res.send(String(consecutiveVowels(word)))
});

module.exports = router;