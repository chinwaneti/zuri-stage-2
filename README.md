# MovieHub - Movie Discovery Web Application

MovieHub is a responsive web application that allows users to search for movies, view movie details, and like their favorite movies. It leverages the TMDB API to provide movie data.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)


## Features

1. **User Interface:**
   - Displays the top 10 movies on the homepage in a grid layout with movie posters.
   - Each movie card displays the movie title and release date.
   
2. **Movie Search:**
   - Allows users to search for movies by title.
   - Displays search results including movie posters, titles, and release dates.
   - Shows a loading indicator while fetching search results.

3. **Movie Details:**
   - Users can view detailed information about a movie by navigating to the `/movies/:id` route.
   - Movie details include:
     - Title
     - Release date (in UTC)
     - Runtime (in minutes)
     - Overview

## Technologies Used

- React 
- Axios (for API requests)
- React Router (for routing)
- [TMDB API](https://www.themoviedb.org/documentation/api)

## Getting Started

Follow these instructions to set up and run MovieHub locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/chinwaneti/zuri-stage-2
   ```

2. Change into the project directory:
   ```bash
   cd moviehub
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add your TMDB API key:
   ```env
   REACT_APP_TMDB_API_KEY=your-api-key
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to see the app in action.

## Usage

- **Homepage:**
  - The homepage lists the top 10 movies with their posters, titles, and release dates.
  
- **Movie Search:**
  - Use the search bar in the header to search for movies by title.
  - The search results will display movie posters, titles, and release dates.
  
- **Movie Details:**
  - Click on a movie card on the homepage to view detailed information about a movie.

## API Integration

MovieHub uses the TMDB API to fetch movie data. It makes use of the following API endpoint to fetch movie details by ID:
- [TMDB Movie Details API](https://api.themoviedb.org/3/movie/{movie_id})

## Error Handling

The application implements error handling to display meaningful error messages to users in case of API failures or other issues.

## Contributing

Contributions to MovieHub are welcome! Feel free to open issues and pull requests for any improvements or bug fixes.

