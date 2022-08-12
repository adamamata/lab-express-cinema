const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res) => {
    Movie.find()
        .then((data) => {
            res.render('movies', { data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
