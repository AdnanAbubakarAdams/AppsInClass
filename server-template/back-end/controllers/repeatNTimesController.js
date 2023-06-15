const express = require('express');
const router = express.Router();

const repeatNTimesWithSpace = require("../utils/repeatNTimes")

router.get("/:word", (req, res) => {
    let {word} = req.params;
    res.send(String(repeatNTimesWithSpace(word, 5)));
});

module.exports = router;