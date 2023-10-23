import { MoviesList } from 'components/MoviesList';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/fetchMovies';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendMovies);
  }, []);

  return (
    <div>
      Trending today
      <MoviesList movies={trendMovies} />
    </div>
  );
};

export default Home;
