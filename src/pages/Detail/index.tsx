/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { Rating } from '../../components/Rating';
import api from '../../services/api';
import {
  Actions,
  InfoHeader,
  MovieContainer,
  MovieInfo,
  RatingContainer,
} from './styles';

interface ITrailer {
  id: string;
  link: string;
}

interface IActor {
  actor: string;
  // eslint-disable-next-line camelcase
  actor_id: string;
  character: string;
}

interface IMovieDetails {
  id: string;
  title: string;
  year: string;
  length: string;
  rating: string;
  poster: string;
  plot: string;
  trailer: ITrailer;
  cast: IActor[];
  reducedCast: string;
}

interface IRating {
  subject: string;
  rating: number;
}

const Detail: React.FC = () => {
  const { movie } = useParams();
  const history = useHistory();

  const defaultRating: IRating[] = [
    { subject: 'Roteiro', rating: 0 },
    { subject: 'Fotografia', rating: 0 },
    { subject: 'Efeitos Especiais', rating: 0 },
    { subject: 'Elenco', rating: 0 },
  ];

  const [loading, setLoading] = useState<boolean>(false);
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const [ratingList, setRatingList] = useState<IRating[]>(defaultRating);

  const fetchDetails = async () => {
    setLoading(true);
    const { data } = await api.get(`/film/${movie}`);

    let reducedCast = '';
    data.cast.forEach((actor: IActor, idx: number) => {
      if (idx <= 3) reducedCast = `${reducedCast} ${actor.actor},`;
      if (idx === data.cast.length - 1)
        reducedCast = `${reducedCast} entre outros.`;
    });

    setMovieDetails({
      ...data,
      reducedCast,
    });
    setLoading(false);
  };

  const handleConfirmRating = () => {
    history.push('/');
  };

  const handleRatingChange = (subject: string, rating: number) => {
    const newRating = ratingList.map(rat => {
      if (rat.subject === subject) {
        return {
          subject,
          rating,
        };
      }
      return rat;
    });

    setRatingList(newRating);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && movieDetails && (
        <>
          <MovieContainer>
            <img src={movieDetails.poster} alt="Poster" />
            <MovieInfo>
              <InfoHeader>
                <div>
                  <h2>{movieDetails.title}</h2>
                  <p>{`${movieDetails.year} - ${movieDetails.length}`}</p>
                  <p>{`Estrelando ${movieDetails.reducedCast}`}</p>
                </div>
                <div>
                  <span>{movieDetails.rating}</span>
                </div>
              </InfoHeader>

              <h3>Resumo</h3>
              <p>{movieDetails.plot}</p>

              <RatingContainer>
                <h3>Avalie</h3>
                <ul>
                  {ratingList.map(rating => (
                    <li>
                      <span>{rating.subject}</span>
                      <Rating
                        onRate={e => {
                          handleRatingChange(rating.subject, e.rating);
                        }}
                        rating={rating.rating}
                      />
                    </li>
                  ))}
                </ul>
              </RatingContainer>

              <Actions>
                <a href="/">Voltar</a>
                <button type="button" onClick={handleConfirmRating}>
                  Confirmar avaliação
                </button>
              </Actions>
            </MovieInfo>
          </MovieContainer>
        </>
      )}
    </div>
  );
};

export default Detail;
