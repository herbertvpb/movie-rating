/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { SearchForm } from './styles';

interface SearchProps {
  handleInputChange: (e: any) => void;
  onSearchSubmit: () => void;
}

const Search: React.FC<SearchProps> = ({
  handleInputChange,
  onSearchSubmit,
}: SearchProps) => {
  return (
    <SearchForm
      onSubmit={(e: any) => {
        e.preventDefault();
        onSearchSubmit();
      }}
    >
      <input
        onChange={handleInputChange}
        placeholder="Digite o nome do filme"
        autoFocus
      />
      <button type="submit">Buscar</button>
    </SearchForm>
  );
};

export default Search;
