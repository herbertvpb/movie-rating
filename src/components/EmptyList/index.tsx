import React from 'react';
import { EmptyListContainer } from './styles';
import sofa from '../../assets/sofa.svg';

const EmptyList: React.FC = () => {
  return (
    <EmptyListContainer>
      <p>Pesquise o filme desejado no campo de busca acima</p>
      <img src={sofa} alt="Aguardando pesquisa" />
    </EmptyListContainer>
  );
};

export default EmptyList;
