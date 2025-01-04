import React, { useState, useRef } from 'react';

const MovieEmbed = () => {
  const [movieId, setMovieId] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');
  const iframeRef = useRef(null);

  const generateEmbedUrl = () => {
    if (!movieId) {
      alert('Please provide a movie ID (IMDb or TMDb).');
      return;
    }
    setEmbedUrl(`https://vidsrc.me/embed/movie?tmdb=${movieId}`);
  };

  const playInFullscreen = () => {
    if (iframeRef.current) {
      iframeRef.current.requestFullscreen().catch((err) => {
        console.error('Failed to enable fullscreen:', err.message);
      });
    }
  };

  return (
    <div>
      <h2>Movie Embed</h2>
      <input
        type="text"
        placeholder="Enter Movie ID (IMDb or TMDb)"
        value={movieId}
        onChange={(e) => setMovieId(e.target.value)}
      />
      <button onClick={generateEmbedUrl}>Generate Embed</button>
      {embedUrl && (
        <div>
          <iframe
            ref={iframeRef}
            src={embedUrl}
            style={{ width: '100%', height: '500px', marginTop: '20px' }}
            frameBorder="0"
            referrerPolicy="origin"
            allowFullScreen
            title="Movie Embed"
          ></iframe>
          <button onClick={playInFullscreen} style={{ marginTop: '10px' }}>
            Play Fullscreen
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieEmbed;