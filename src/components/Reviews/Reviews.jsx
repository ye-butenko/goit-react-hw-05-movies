import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return <Loader />;
  }

  return (
    <ul>
      {movieReviews.map(({ id, content, author }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
