const MovieCard = ({ movie }) => {
  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.tagline}</p>

      <div className="movie-info">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width="350"
          />
        </div>

        <div className="details">
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>
          <p>
            <strong>Genres:</strong>{' '}
            {movie.genres.map(genre => genre.name).join(', ')}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>IMDB Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Production Companies:</strong>{' '}
            {movie.production_companies.map(company => company.name).join(', ')}
          </p>
          <p>
            <strong>Spoken Languages:</strong>{' '}
            {movie.spoken_languages.map(language => language.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
