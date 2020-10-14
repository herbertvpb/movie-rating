import React, { useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { MoviesContainer } from './styles';
import EmptyList from '../../components/EmptyList';
import api from '../../services/api';
import Loader from '../../components/Loader';
import { IMovie } from './types';

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchMovies = async () => {
    if (searchValue) {
      setLoading(true);
      const { data } = await api.get(`/search/${searchValue}`);
      setMovies(data.titles);
      setLoading(false);
    }
  };

  const handleInputChange = async (e: any) => setSearchValue(e.target.value);

  return (
    <>
      <Header
        handleInputChange={handleInputChange}
        onSearchSubmit={searchMovies}
      />
      {loading && <Loader />}
      {!loading && movies.length === 0 && <EmptyList />}
      {!loading && movies.length > 0 && (
        <MoviesContainer>
          {movies.map(movie => (
            <Card
              key={movie.id}
              id={movie.id}
              image={movie.image}
              title={movie.title}
            />
          ))}
        </MoviesContainer>
      )}
    </>
  );
};

export default Home;
