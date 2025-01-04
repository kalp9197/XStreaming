import express from 'express'
import {getLatestMovies,getMovieEmbedUrl} from '../controllers/movieController.js'

const router = express.Router();

router.get('/latest/:page', getLatestMovies);

router.get('/embed', getMovieEmbedUrl);

export default router