import express from 'express';

const router = express.Router();

// GET TV show embed URL
router.get('/embed', (req, res) => {
  const { imdb, tmdb, ds_lang } = req.query;

  if (!imdb && !tmdb) {
    return res.status(400).json({ error: 'IMDb or TMDb ID is required' });
  }

  let url = 'https://vidsrc.xyz/embed/tv';
  if (imdb) url += `?imdb=${imdb}`;
  else if (tmdb) url += `?tmdb=${tmdb}`;
  if (ds_lang) url += `&ds_lang=${ds_lang}`;

  res.json({ embedUrl: url });
});

// GET latest TV shows
router.get('/latest/:page', (req, res) => {
  const { page } = req.params;
  const url = `https://vidsrc.xyz/tvshows/latest/page-${page}.json`;
  res.json({ latestTVShowsUrl: url });
});

export default router;