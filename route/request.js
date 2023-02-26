const express = require('express');
const router = express.Router();
const Census = require('../model/census');

router.get('/census', (req, res, next) => {
    Census.aggregate([{
        $sample: { size:1 }
    }]).then ( (census) => {
        console.log(census);
        res.send(census);
    }).catch(next);
});

module.exports = router;