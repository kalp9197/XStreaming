import React from 'react';
import MovieEmbed from './components/MovieEmbed';
import TVShowEmbed from './components/TVShowEmbed';
import EpisodeEmbed from './components/EpisodeEmbed';

const App = () => {
  return (
    <div>
      <h1>Embed URL Generator</h1>
      <MovieEmbed />
      <TVShowEmbed />
      <EpisodeEmbed />
    </div>
  );
};

export default App;
