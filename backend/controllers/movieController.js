import axios from 'axios';
export const getLatestMovies = async (req, res) => {
    const { page } = req.params;
    try {
        const response = await axios.get(`https://vidsrc.xyz/movies/latest/page-${page}.json`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch latest movies.' });
    }
};

export const getMovieEmbedUrl = (req, res) => {
    const { imdb, tmdb, sub_url, ds_lang } = req.query;

    if (!imdb && !tmdb) {
        return res.status(400).json({ error: 'IMDb or TMDb ID is required.' });
    }

    let embedUrl = `https://vidsrc.xyz/embed/movie?`;
    if (imdb) embedUrl += `imdb=${imdb}`;
    if (tmdb) embedUrl += `tmdb=${tmdb}`;
    if (sub_url) embedUrl += `&sub_url=${encodeURIComponent(sub_url)}`;
    if (ds_lang) embedUrl += `&ds_lang=${ds_lang}`;

    res.status(200).json({ embedUrl });
};
