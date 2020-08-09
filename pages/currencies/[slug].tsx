import React from 'react';
import colors from 'components/ui/tokens/colors';
import Router from 'next/router';
import Card from 'components/card';
import { SpinnerDiamond } from 'spinners-react';
import Palette from 'components/palette';

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
  const [chartData, setChartData] = React.useState<
    | SparklineDataItem[]
    | []
    | Promise<({ date: Date; value: number } | undefined)[]>
  >([]);
  const [coinData, setCoinData] = React.useState({});

  const width = 300;
  const height = 160;

  const makeApiRequest = async (url: string) => {
    // const coinUrl = `https://api.coingecko.com/api/v3/coins/${Router.query.slug}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
    // const chartUrl = `https://api.coingecko.com/api/v3/coins/${Router.query.slug}/market_chart?vs_currency=usd&days=100`;
    const response = await fetch(url);
    // const chartResponse = await fetch(chartUrl);
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

  const getChartData = async (url: string) => {
    const data: ApiResponse = await makeApiRequest(url);
    setChartData(formatData(data));
  };

  const getCoinData = async (url: string) => {
    const data: ApiResponse = await makeApiRequest(url);
    console.log('data', data);
    setCoinData(data);
  };

  React.useEffect(() => {
    const coinUrl = `https://api.coingecko.com/api/v3/coins/${Router.query.slug}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
    const chartUrl = `https://api.coingecko.com/api/v3/coins/${Router.query.slug}/market_chart?vs_currency=usd&days=100`;
    getCoinData(coinUrl);
    getChartData(chartUrl);
  }, []);

  console.log('coi: ', coinData);

  return (
    <Grid>
      {process.browser && <H1>{Router.query.slug}</H1>}
      {/* <img src={coinData.image.thumb || ''} /> */}
      {coinData.image && coinData.image.thumb && (
        <Palette imgSrc={`${coinData.image.thumb}`} />
      )}
      {Array.isArray(chartData) && chartData.length > 0 ? (
        <SparklineCard
          data={chartData}
          height={height}
          width={width}
          currentPrice={chartData[chartData.length - 1].value}
        />
      ) : (
        <Card>
          <SpinnerDiamond color={colors.brand.midlight} />
        </Card>
      )}
    </Grid>
  );
}
