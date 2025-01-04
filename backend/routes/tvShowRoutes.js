import express from 'express';
import { getLatestTVShows, getTVShowEmbedUrl } from '../controllers/tvShowController.js';

const router = express.Router();

router.get('/latest/:page', getLatestTVShows);

router.get('/embed', getTVShowEmbedUrl);

export default router;
