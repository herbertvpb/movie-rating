import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import api from '../../services/api';
import { InfoHeader, MovieContainer, MovieInfo } from './styles';

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

const Detail: React.FC = () => {
  const { movie } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();

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

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && movieDetails && (
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
          </MovieInfo>
        </MovieContainer>
      )}
    </div>
  );
};

export default Detail;
