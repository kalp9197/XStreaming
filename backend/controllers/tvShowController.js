import axios from 'axios';

export const getLatestTVShows = async (req, res) => {
    const { page } = req.params;
    try {
        const response = await axios.get(`https://vidsrc.xyz/tvshows/latest/page-${page}.json`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch latest TV shows.' });
    }
};

export const getTVShowEmbedUrl = (req, res) => {
    const { imdb, tmdb, ds_lang } = req.query;

    if (!imdb && !tmdb) {
        return res.status(400).json({ error: 'IMDb or TMDb ID is required.' });
    }

    let embedUrl = `https://vidsrc.xyz/embed/tv?`;
    if (imdb) embedUrl += `imdb=${imdb}`;
    if (tmdb) embedUrl += `tmdb=${tmdb}`;
    if (ds_lang) embedUrl += `&ds_lang=${ds_lang}`;

    res.status(200).json({ embedUrl });
};