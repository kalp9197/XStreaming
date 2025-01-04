import React, { useState, useRef } from 'react';

const TVShowEmbed = () => {
  const [tvShowId, setTvShowId] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');
  const iframeRef = useRef(null);

  const generateEmbedUrl = () => {
    if (!tvShowId) {
      alert('Please provide a TV show ID (IMDb or TMDb).');
      return;
    }
    setEmbedUrl(`https://vidsrc.me/embed/tv?tmdb=${tvShowId}`);
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
      <h2>TV Show Embed</h2>
      <input
        type="text"
        placeholder="Enter TV Show ID (IMDb or TMDb)"
        value={tvShowId}
        onChange={(e) => setTvShowId(e.target.value)}
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
            title="TV Show Embed"
          ></iframe>
          <button onClick={playInFullscreen} style={{ marginTop: '10px' }}>
            Play Fullscreen
          </button>
        </div>
      )}
    </div>
  );
};

export default TVShowEmbed;