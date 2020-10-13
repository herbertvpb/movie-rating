import React from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { MoviesContainer } from './styles';

const movies = [
  {
    title: 'Inception',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg',
    id: 'tt1375666',
  },
  {
    title: 'Inception',
    image:
      'https://m.media-amazon.com/images/M/MV5BYWJmYWJmNWMtZTBmNy00M2MzLTg5ZWEtOGU5ZWRiYTE0ZjVmXkEyXkFqcGdeQXVyNzkyOTM2MjE@.jpg',
    id: 'tt7321322',
  },
  {
    title: 'Inception',
    image:
      'https://m.media-amazon.com/images/M/MV5BNzhiZDQ4NTQtNmQzYy00ZTdlLWJiNzktZTY0NmQ2OGVjZDkxXkEyXkFqcGdeQXVyNTEyMjM2MjE@.jpg',
    id: 'tt1886283',
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;
