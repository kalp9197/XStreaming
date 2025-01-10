# Video Embed Generator
![VideoPreview](https://github.com/user-attachments/assets/56b648cf-0f5a-4bb5-a616-c3c5c706621f)

A **React** and **Node.js** application designed to dynamically generate and display video embed URLs for movies, TV shows, and episodes. This project integrates with the **vidsrc.me** embed API, allowing users to input IMDb or TMDb IDs and instantly view the media content in iframes with fullscreen mode.

## Features

- **ID Input**: Users can input TMDb IDs to generate embed URLs.
  - To get the ID from TMDb, visit the [TMDb website](https://www.themoviedb.org/), select your desired movie or series, and copy the ID from the query parameters. Paste this ID in the project to generate the embed URL.
  
- **Media Support**: 
  - Supports movies, TV shows, and specific episodes.
  
- **Iframe Playback**: 
  - Displays the content directly in an iframe for seamless viewing.
  
- **Fullscreen Mode**: 
  - Includes a fullscreen feature for an immersive viewing experience.

- **Integration**: 
  - Uses the **vidsrc.me** embed API to fetch and display video content.

## How to Run

To get the project up and running locally, follow the steps below:

### 1. Install Dependencies
Run the following command to install all required dependencies for both frontend and backend:

```bash
npm install
npm run dev
