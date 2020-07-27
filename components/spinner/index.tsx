import React from 'react';
import { SpinnerDiamond } from 'spinners-react';
import Styles from './style';

export const PageSpinner = () => (
  <Styles.PageSpinnerWrapper>
    <Styles.SpinnerWrapper>
      <SpinnerDiamond />
    </Styles.SpinnerWrapper>
  </Styles.PageSpinnerWrapper>
);
