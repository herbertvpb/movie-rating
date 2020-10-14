import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { MoviesContainer } from './styles';
import EmptyList from '../../components/EmptyList';
import api from '../../services/api';

interface IMovie {
  id: string;
  title: string;
  image: string;
}

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [movies, setMovies] = useState<IMovie[]>([]);

  const searchMovies = async () => {
    const response = await api.get(`/search/${searchValue}`);

    setMovies(response.data.titles);
  };

  const handleInputChange = async (e: any) => setSearchValue(e.target.value);

  return (
    <>
      <Header
        handleInputChange={handleInputChange}
        onSearchSubmit={searchMovies}
      />
      {movies.length ? (
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
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Home;
