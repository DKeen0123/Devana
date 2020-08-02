import React from 'react';
import colors from 'components/ui/tokens/colors';
import Router from 'next/router';
import Card from 'components/card';
import { SpinnerDiamond } from 'spinners-react';

import { unixTimestampToDate } from 'helpers/date';
import SparkLineGraph from 'components/graphs/sparkline';
import { H1, Text } from 'components/ui/atoms/typography';
import { PageSpinner } from 'components/spinner';
import { Grid } from 'components/ui/atoms/grid';
import { SparklineDataItem } from 'components/graphs/sparkline/types';
import SparklineCard from 'components/ui/molecules/sparkline-card';

export interface ApiResponse {
  prices: [number[]];
}

export default function Currencies() {
  const [data, setData] = React.useState<SparklineDataItem[]>([]);
  const width = 300;
  const height = 160;

  const makeApiRequest = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${Router.query.slug}/market_chart?vs_currency=usd&days=100
`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const formatData = (data: ApiResponse) => {
    const pricesToShow = data.prices.map((price, idx) => {
      if (idx % 5 == 0) {
        return {
          date: unixTimestampToDate(price[0]),
          value: price[1],
        };
      }
    });
    const filteredPrices = pricesToShow.filter((el) => el != null);
    return filteredPrices;
  };

  const getData = async () => {
    const data: ApiResponse = await makeApiRequest();
    const formattedData = formatData(data);
    setData(formattedData);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Grid>
      {process.browser && <H1>{Router.query.slug}</H1>}
      {data.length > 0 ? (
        <SparklineCard
          data={data}
          height={height}
          width={width}
          currentPrice={data[data.length - 1].value}
        />
      ) : (
        <Card>
          <SpinnerDiamond color={colors.brand.midlight} />
        </Card>
      )}
    </Grid>
  );
}
