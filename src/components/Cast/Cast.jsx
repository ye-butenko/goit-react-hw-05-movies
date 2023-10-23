import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/fetchMovies';
import {
  ActorCard,
  ActorCardContainer,
  ActorCharacter,
  ActorDetails,
  ActorImage,
  ActorListWrapper,
  ActorName,
} from './Cast.styled';
import Loader from 'components/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return <Loader/>;
  }

  return (
    <ActorListWrapper>
      <ActorCardContainer>
        {movieCast.map(actor => (
          <ActorCard key={actor.id}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : 'https://media.istockphoto.com/id/1263630755/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%96%D0%BA%D0%BE%D0%BD%D0%B0-%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BC%D0%B0%D1%81%D0%BA%D0%B8-%D1%81%D0%B8%D0%BB%D1%83%D0%B5%D1%82-%D1%96%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%B4%D1%80%D0%B0%D0%BC%D0%B8-%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9.jpg?s=170667a&w=0&k=20&c=9uSXvTr0H12iY32ADHuYyzE-mGWmZ_9dksftRjHB17o='
              }
              alt={actor.name}
            />
            <ActorDetails>
              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>Character: {actor.character}</ActorCharacter>
            </ActorDetails>
          </ActorCard>
        ))}
      </ActorCardContainer>
    </ActorListWrapper>
  );
};

export default Cast;
