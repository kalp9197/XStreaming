import express from 'express';
import { getLatestEpisodes, getEpisodeEmbedUrl } from '../controllers/episodeController.js';

const router = express.Router();

router.get('/latest/:page', getLatestEpisodes);

router.get('/embed', getEpisodeEmbedUrl);

export default router;