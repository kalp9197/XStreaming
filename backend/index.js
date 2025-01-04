import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes.js';
import tvShowRoutes from './routes/tvShowRoutes.js';
import episodeRoutes from './routes/episodeRoutes.js';

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);
app.use('/api/tvshows', tvShowRoutes);
app.use('/api/episodes', episodeRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});