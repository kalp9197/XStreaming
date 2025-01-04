import express from 'express';
import { getLatestEpisodes, getEpisodeEmbedUrl } from '../controllers/episodeController.js';

const router = express.Router();

router.route('/latest/:page').get(getLatestEpisodes)

router.route('/embed').get(getEpisodeEmbedUrl);

export default router