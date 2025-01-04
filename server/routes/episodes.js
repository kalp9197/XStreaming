import express from 'express';

const router = express.Router();

// GET episode embed URL
router.get('/embed', (req, res) => {
  const { imdb, tmdb, season, episode, sub_url, ds_lang } = req.query;

  if (!imdb && !tmdb) {
    return res.status(400).json({ error: 'IMDb or TMDb ID is required' });
  }
  if (!season || !episode) {
    return res.status(400).json({ error: 'Season and episode are required' });
  }

  let url = 'https://vidsrc.xyz/embed/tv';
  if (imdb) url += `?imdb=${imdb}`;
  else if (tmdb) url += `?tmdb=${tmdb}`;
  url += `&season=${season}&episode=${episode}`;
  if (sub_url) url += `&sub_url=${encodeURIComponent(sub_url)}`;
  if (ds_lang) url += `&ds_lang=${ds_lang}`;

  res.json({ embedUrl: url });
});

// GET latest episodes
router.get('/latest/:page', (req, res) => {
  const { page } = req.params;
  const url = `https://vidsrc.xyz/episodes/latest/page-${page}.json`;
  res.json({ latestEpisodesUrl: url });
});

export default router;