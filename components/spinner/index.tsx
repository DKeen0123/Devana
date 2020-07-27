import React from 'react';
import { SpinnerDiamond } from 'spinners-react';
import Styles from './style';
import colors from 'components/ui/tokens/colors';

export const PageSpinner = () => (
  <Styles.PageSpinnerWrapper>
    <Styles.SpinnerWrapper>
      <SpinnerDiamond color={colors.brand.midlight} />
    </Styles.SpinnerWrapper>
  </Styles.PageSpinnerWrapper>
);
