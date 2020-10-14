import React from 'react';

import logo from '../../assets/logo.png';
import Search from '../Search';
import { HeaderContainer } from './styles';

interface HeaderProps {
  handleInputChange: (e: any) => void;
  onSearchSubmit: () => void;
}

const Header: React.FC<HeaderProps> = ({
  handleInputChange,
  onSearchSubmit,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Movie Rating" />
      <Search
        handleInputChange={handleInputChange}
        onSearchSubmit={onSearchSubmit}
      />
    </HeaderContainer>
  );
};

export default Header;
