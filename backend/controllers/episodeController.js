import axios from 'axios';

export const getLatestEpisodes = async (req, res) => {
    const { page } = req.params;
    try {
        const response = await axios.get(`https://vidsrc.xyz/episodes/latest/page-${page}.json`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch latest episodes.' });
    }
};

export const getEpisodeEmbedUrl = (req, res) => {
    const { imdb, tmdb, season, episode, sub_url, ds_lang } = req.query;

    if (!imdb && !tmdb) {
        return res.status(400).json({ error: 'IMDb or TMDb ID is required.' });
    }
    if (!season || !episode) {
        return res.status(400).json({ error: 'Season and episode numbers are required.' });
    }

    let embedUrl = `https://vidsrc.xyz/embed/tv?`;
    if (imdb) embedUrl += `imdb=${imdb}`;
    if (tmdb) embedUrl += `tmdb=${tmdb}`;
    embedUrl += `&season=${season}&episode=${episode}`;
    if (sub_url) embedUrl += `&sub_url=${encodeURIComponent(sub_url)}`;
    if (ds_lang) embedUrl += `&ds_lang=${ds_lang}`;

    res.status(200).json({ embedUrl });
};