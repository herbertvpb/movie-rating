/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { CardContainer, TitleBox } from './styles';

interface CardProps {
  id: string;
  title: string;
  image: string;
}

const Card = ({ id, image, title }: CardProps) => {
  return (
    <CardContainer href="movie-detail">
      <img src={image} alt="Poster" />
      <TitleBox>
        <strong>{title}</strong>
      </TitleBox>
    </CardContainer>
  );
};

export default Card;
