import React from 'react';

import logo from '../../assets/logo.png';
import Search from '../Search';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Movie Rating" />
      <Search />
    </HeaderContainer>
  );
};

export default Header;
