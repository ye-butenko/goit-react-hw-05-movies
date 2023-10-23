import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, original_name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title ?? original_name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
