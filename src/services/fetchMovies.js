import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: '20e13b9a04a0b41c58cfa9dd598a635c',
  language: 'en-US',
  include_adult: false,
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?${searchParams}`);
  return data.results;
};

export const getMovieByName = async name => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&query=${name}`
  );
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?${searchParams}`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits?${searchParams}`);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?${searchParams}`);
  return data.results;
};
