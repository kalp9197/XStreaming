import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import moviesRouter from './routes/movies.js';
import tvshowsRouter from './routes/tvshows.js';
import episodesRouter from './routes/episodes.js';
const PORT = 7001

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/movies', moviesRouter);
app.use('/api/tvshows', tvshowsRouter);
app.use('/api/episodes', episodesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});