import React from 'react';
import { LoaderContainer, Spinner } from './styles';

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loader;
