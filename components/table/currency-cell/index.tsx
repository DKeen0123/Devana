import React from 'react';
import Styles from './style';
import { CurrencyCellProps } from './types';
import { Text } from 'components/ui/atoms/typography';

const CurrencyCell: React.FC<CurrencyCellProps> = ({ name, symbol, icon }) => (
  <Styles.Wrapper>
    <Styles.Icon src={icon} />
    <Text>
      {name} <span> ({symbol.toUpperCase()})</span>
    </Text>
  </Styles.Wrapper>
);

export default CurrencyCell;
