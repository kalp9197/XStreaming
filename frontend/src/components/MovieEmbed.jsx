import React, { useState } from 'react';
import { getMovieEmbedUrl } from '../api';

const MovieEmbed = () => {
  const [imdb, setImdb] = useState('');
  const [tmdb, setTmdb] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');
  const [subUrl, setSubUrl] = useState('');
  const [dsLang, setDsLang] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getMovieEmbedUrl(imdb, tmdb, subUrl, dsLang);
      setEmbedUrl(response.data.embedUrl);
    } catch (error) {
      alert('Error fetching embed URL');
    }
  };

  return (
    <div>
      <h2>Get Movie Embed URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="IMDb ID"
          value={imdb}
          onChange={(e) => setImdb(e.target.value)}
        />
        <input
          type="text"
          placeholder="TMDb ID"
          value={tmdb}
          onChange={(e) => setTmdb(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subtitle URL"
          value={subUrl}
          onChange={(e) => setSubUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Default Subtitle Language"
          value={dsLang}
          onChange={(e) => setDsLang(e.target.value)}
        />
        <button type="submit">Get Embed URL</button>
      </form>

      {embedUrl && (
        <div>
          <h3>Embed URL:</h3>
          <a href={embedUrl} target="_blank" rel="noopener noreferrer">
            {embedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default MovieEmbed;
