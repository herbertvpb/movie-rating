import React from 'react';
import { SearchForm } from './styles';

const Search: React.FC = () => {
  return (
    <SearchForm>
      <input placeholder="Digite o nome do filme" />
      <button type="submit">Buscar</button>
    </SearchForm>
  );
};

export default Search;
