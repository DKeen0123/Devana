import React from 'react';
import Styles from './style';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({
  backgroundColor = 'dark',
  backgroundTone = 'dark',
  children,
}) => (
  <Styles.CardWrapper
    backgroundColor={backgroundColor}
    backgroundTone={backgroundTone}
  >
    {children}
  </Styles.CardWrapper>
);

export default Card;
