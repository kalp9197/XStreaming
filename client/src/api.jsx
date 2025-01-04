import axios from 'axios';

const API_BASE_URL = 'http://localhost:7001/api';

export const fetchLatestMovies = (page) => {
  return axios.get(`${API_BASE_URL}/movies/latest/${page}`);
};

export const fetchLatestTVShows = (page) => {
  return axios.get(`${API_BASE_URL}/tvshows/latest/${page}`);
};

export const fetchLatestEpisodes = (page) => {
  return axios.get(`${API_BASE_URL}/episodes/latest/${page}`);
};

export const getMovieEmbedUrl = (imdb, tmdb, sub_url, ds_lang) => {
  return axios.get(`${API_BASE_URL}/movies/embed`, {
    params: { imdb, tmdb, sub_url, ds_lang }
  });
};

export const getTVShowEmbedUrl = (imdb, tmdb, ds_lang) => {
  return axios.get(`${API_BASE_URL}/tvshows/embed`, {
    params: { imdb, tmdb, ds_lang }
  });
};

export const getEpisodeEmbedUrl = (imdb, tmdb, season, episode, sub_url, ds_lang) => {
  return axios.get(`${API_BASE_URL}/episodes/embed`, {
    params: { imdb, tmdb, season, episode, sub_url, ds_lang }
  });
};
