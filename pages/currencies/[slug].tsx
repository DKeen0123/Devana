import React from 'react';
import * as d3 from 'd3';
import Router from 'next/router';
import Card from 'components/card';
import { dateToUnixTimestamp, unixTimestampToDate } from 'helpers/date';

export interface ApiResponse {
  prices: [number[]];
}

export default function Currencies() {
  const [data, setData] = React.useState<{ date: Date; amount: number }[]>([]);
  const [areaPath, setAreaPath] = React.useState('');
  const [linePath, setLinePath] = React.useState('');
  const width = 650;
  const height = 140;

  const makeApiRequest = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${Router.query.slug}/market_chart?vs_currency=usd&days=100
`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const formatData = (data: ApiResponse) => {
    return data.prices
      .map((price, idx) => {
        if (idx % 10 == 0) {
          return {
            date: unixTimestampToDate(price[0]),
            amount: price[1],
          };
        }
      })
      .filter((el) => el != null);
  };

  const getData = async () => {
    const data = await makeApiRequest();
    console.log('formatted: ', formatData(data));
    return setData(formatData(data));
  };

  const createChart = () => {
    const curve = d3.curveBasis;
    // 1. map date to x-position
    // get min and max of date
    if (data.length > 0) {
      const extent = d3.extent(data, (d) => d.date) as [Date, Date];
      const xScale = d3.scaleTime().domain(extent).range([0, width]);

      // 2. map amount to y-position
      // get min/max of amount
      const [min, max] = d3.extent(data, (d) => d.amount) as [number, number];
      console.log('min: ', min);
      console.log('max: ', max);
      const yScale = d3.scaleLinear().domain([min, max]).range([height, 0]);

      const getX = (d: { date: Date; amount: number }) => {
        return xScale(d.date);
      };
      const getY = (d: { date: Date; amount: number }) => {
        return yScale(d.amount);
      };
      const area = d3
        .area()
        .curve(curve)
        .x((d) => getX(d))
        .y1((d) => getY(d))
        .y0(height);

      const line = d3
        .line()
        .curve(curve)
        .x((d) => getX(d))
        .y((d) => getY(d));
      setAreaPath(area(data));
      setLinePath(line(data));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    createChart();
  }, [data]);

  return (
    <Card>
      <svg width={width} height={height} fill="orange">
        <path d={areaPath} fill="orange" stroke="none" />
        <path d={linePath} fill="none" stroke="yellow" strokeWidth="4" />
        {/* <g ref="xAxis" transform={`translate(0, ${height - margin.bottom})`} /> */}
        {/* <g ref="yAxis" transform={`translate(${margin.left}, 0)`} /> */}
      </svg>
    </Card>
  );
}
