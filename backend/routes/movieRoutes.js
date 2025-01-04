const express = require('express');
const { getLatestMovies, getMovieEmbedUrl } = require('../controllers/movieController');
const router = express.Router();

router.get('/latest/:page', getLatestMovies);

router.get('/embed', getMovieEmbedUrl);

module.exports = router;