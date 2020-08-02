import React from 'react';
import Styles from './style';

const LinearGradientFill = () => {
  return (
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#Cc824d" stopOpacity="1" />
      <stop offset="100%" stopColor="#D37417" stopOpacity="1" />
    </linearGradient>
  );
};

// lineChartData = {
//   const xExtent = d3.extent(data, d => d.date);
//   const yExtent = d3.extent(data, d => d.high);
//   const xScale = d3.scaleTime().domain(xExtent).range([0, width]);
//   const yScale = d3.scaleLinear().domain(yExtent).range([height, 0]);
//   const getX = (d) => {
//      return xScale(d.date);
//   };
//   const getY = (d) => {
//     return yScale(d.high);
//   };
//   const line = d3.line().x((d) => getX(d)).y((d) => getY(d));
//   // ...
//   return [{path: line(data), fill: 'red'}]
// }

const SparkLineGraph: React.FC<{ data: number[] }> = ({ data }) => (
  <Styles.Wrapper>
    <Sparklines data={data}>
      <svg>
        <defs>
          <LinearGradientFill />
        </defs>
      </svg>
      <SparklinesLine
        style={{
          strokeWidth: 1,
          fill: 'url(#gradient)',
          fillOpacity: 0.8,
        }}
        color="#Cc824d"
      />
    </Sparklines>
  </Styles.Wrapper>
);

export default SparkLineGraph;
