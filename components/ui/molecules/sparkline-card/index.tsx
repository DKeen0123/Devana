import React from 'react';
import Card from 'components/card';
import SparkLineGraph from 'components/graphs/sparkline';
import { SparklineCardProps } from './types';
import Styles from './style';
import { Text, H3 } from 'components/ui/atoms/typography';

const SparklineCard: React.FC<SparklineCardProps> = ({
  data,
  width,
  height,
  currentPrice,
  imageUrl,
}) => (
  <Styles.CardWrapper width={width}>
    <Card>
      <Styles.HeadingWrapper>
        <img src={imageUrl} />
        <Styles.PriceWrapper>
          <H3>Current price</H3>
          <Text>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(currentPrice)}
          </Text>
        </Styles.PriceWrapper>
      </Styles.HeadingWrapper>
      <SparkLineGraph data={data} width={width} height={height} />
    </Card>
  </Styles.CardWrapper>
);

export default SparklineCard;
