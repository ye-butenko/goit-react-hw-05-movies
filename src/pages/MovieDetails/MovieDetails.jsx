import MovieCard from 'components/MovieCard';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchMovies';
import { StyledNavLink } from './MovieDetails.styled';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink}>← Go back</Link>
      <MovieCard movie={movieDetails} state={{ from: location }} />
      <ul>
        <StyledNavLink to={'cast'}>Cast</StyledNavLink>
        <StyledNavLink to={'reviews'}>Reviews</StyledNavLink>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
