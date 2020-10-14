import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

interface RatingProps {
  rating: number;
  onRate: (e: any) => void;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  onRate,
}: RatingProps) => {
  return <Rater onRate={onRate} total={5} rating={rating} />;
};
