import express from 'express';

const router = express.Router();

// GET movie embed URL
router.get('/embed', (req, res) => {
  const { imdb, tmdb, sub_url, ds_lang } = req.query;

  if (!imdb && !tmdb) {
    return res.status(400).json({ error: 'IMDb or TMDb ID is required' });
  }

  let url = 'https://vidsrc.xyz/embed/movie';
  if (imdb) url += `?imdb=${imdb}`;
  else if (tmdb) url += `?tmdb=${tmdb}`;
  if (sub_url) url += `&sub_url=${encodeURIComponent(sub_url)}`;
  if (ds_lang) url += `&ds_lang=${ds_lang}`;

  res.json({ embedUrl: url });
});

// GET latest movies
router.get('/latest/:page', (req, res) => {
  const { page } = req.params;
  const url = `https://vidsrc.xyz/movies/latest/page-${page}.json`;
  res.json({ latestMoviesUrl: url });
});

export default router;