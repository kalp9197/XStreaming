import React, { useState, useRef } from 'react';

const EpisodeEmbed = () => {
  const [tvShowId, setTvShowId] = useState('');
  const [season, setSeason] = useState('');
  const [episode, setEpisode] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');
  const iframeRef = useRef(null);

  const generateEmbedUrl = () => {
    if (!tvShowId || !season || !episode) {
      alert('Please provide a TV show ID, season, and episode number.');
      return;
    }
    setEmbedUrl(
      `https://vidsrc.me/embed/tv?tmdb=${tvShowId}&season=${season}&episode=${episode}`
    );
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
      <h2>Episode Embed</h2>
      <input
        type="text"
        placeholder="Enter TV Show ID (TMDb)"
        value={tvShowId}
        onChange={(e) => setTvShowId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Season Number"
        value={season}
        onChange={(e) => setSeason(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Episode Number"
        value={episode}
        onChange={(e) => setEpisode(e.target.value)}
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
            title="Episode Embed"
          ></iframe>
          <button onClick={playInFullscreen} style={{ marginTop: '10px' }}>
            Play Fullscreen
          </button>
        </div>
      )}
    </div>
  );
};

export default EpisodeEmbed;
