const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET movies page */
router.get('/movies', (req, res) => {
    Movie.find()
        .then((data) => {
            res.render('movies', { data });
        })
        .catch((err) => console.log(err));
});

/* GET see-more page */
router.get('/movies/:id', (req, res) => {
    const { id } = req.params;

    Movie.findById(id)
        .then((data) => {
            res.render('see-more', data)
        })
        .catch((err) => console.log(err));
});

module.exports = router;