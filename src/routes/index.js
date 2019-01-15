var express = require('express');
var router = express.Router();

var Listing = require('../models/listing');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/detail', (req, res) => {
    res.render('detail');
})

router.post('/detail', async(req, res) => {
    var listing = new Listing(req.body);
    await listing.save();
    res.render('detail');
    var listings = await Listing.find();
    console.log(listings);
});

module.exports = router;