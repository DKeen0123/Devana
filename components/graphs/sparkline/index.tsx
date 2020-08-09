import React from 'react';
import * as d3 from 'd3';
import Styles from './style';
import { SparklineProps, SparklineDataItem } from './types';
import { formatCurrency } from 'helpers/currency';

const LinearGradientFill = () => {
  return (
    <svg height="0" width="0">
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#Cc824d" stopOpacity="1" />
        <stop offset="100%" stopColor="#D37417" stopOpacity="1" />
      </linearGradient>
    </svg>
  );
};

const SparkLineGraph: React.FC<SparklineProps> = ({ data, width, height }) => {
  const [areaPath, setAreaPath] = React.useState('');
  const [linePath, setLinePath] = React.useState('');
  const [textContent, setTextContent] = React.useState('');
  const circle = React.useRef<SVGCircleElement>(null);
  const circleText = React.useRef<SVGTextElement>(null);
  const rectRef = React.useRef<SVGRectElement>(null);
  const bisect = d3.bisector(function (d: SparklineDataItem) {
    return d.date;
  }).left;

  const scales = () => {
    // 1. map date to x-position
    // get min and max of date
    const extent = d3.extent(data, (d) => d.date) as [Date, Date];
    const xScale = d3.scaleTime().domain(extent).range([0, width]);

    // 2. map value to y-position
    // get min/max of value
    const [min, max] = d3.extent(data, (d) => d.value) as [number, number];
    const yScale = d3.scaleLinear().domain([min, max]).range([height, 25]);
    return {
      xScale,
      yScale,
    };
  };

  const createChart = () => {
    const curve = d3.curveBasis;
    const { xScale, yScale } = scales();

    const getX = (d: { date: Date; value: number }) => {
      return xScale(d.date);
    };
    const getY = (d: { date: Date; value: number }) => {
      return yScale(d.value);
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
  };

  React.useEffect(() => {
    createChart();
    let line = d3.selectAll('#line');
    const totalLength = line != null && line.node().getTotalLength();

    line
      .attr('stroke-dasharray', totalLength)
      .attr('stroke-dashoffset', totalLength)
      .attr('stroke-width', 4)
      .attr('stroke', 'yellow')
      .transition()
      .duration(3000)
      .attr('stroke-dashoffset', 0);

    const area = d3.selectAll('#area');
    area
      .attr('transform', 'translate(0, 300)')
      .transition()
      .duration(3000)
      .attr('transform', 'translate(0,0)');
  }, [data, linePath, areaPath]);

  const rectToDoEvents = d3.select(rectRef.current);

  rectToDoEvents.on('mouseover', () => {
    circle && circle.current && circle.current.setAttribute('opacity', '1');
    circleText &&
      circleText.current &&
      circleText.current.setAttribute('opacity', '1');
  });

  rectToDoEvents.on('mouseout', () => {
    circle && circle.current && circle.current.setAttribute('opacity', '0');
    circleText &&
      circleText.current &&
      circleText.current.setAttribute('opacity', '0');
  });

  rectToDoEvents.on('mousemove', () => {
    const rect = rectRef && rectRef.current;
    const { xScale, yScale } = scales();
    if (xScale != null && rect != null && xScale != null && yScale != null) {
      const x0 = xScale.invert(d3.mouse(rect)[0]);
      const i = bisect(data, x0, 1);
      const selectedData = data[i];
      circle &&
        circle.current &&
        circle.current.setAttribute('cx', xScale(selectedData.date));
      circle &&
        circle.current &&
        circle.current.setAttribute('cy', yScale(selectedData.value));
      const text = `${formatCurrency(selectedData.value)}`;
      setTextContent(text);
      let textXOffset = 0;
      if (xScale(selectedData.date) > width / 2) {
        textXOffset = text.length >= 7 ? 60 : 30;
      }
      circleText &&
        circleText.current &&
        circleText.current.setAttribute(
          'x',
          (xScale(selectedData.date) - textXOffset).toString()
        );
      circleText &&
        circleText.current &&
        circleText.current.setAttribute(
          'y',
          (yScale(selectedData.value) - 20).toString()
        );
    }
  });
  return (
    <Styles.Wrapper>
      <LinearGradientFill />
      <svg width={width} height={height} fill="yellow">
        <path id="area" d={areaPath} fill="url(#gradient)" stroke="none" />
        <path id="line" d={linePath} fill="none" />
        <g>
          <circle
            ref={circle}
            fill="yellow"
            strokeWidth="4"
            stroke="white"
            r={8.5}
            opacity={0}
          />
        </g>
        <g>
          <text
            id="svg-text"
            ref={circleText}
            opacity={0}
            textAnchor="left"
            alignmentBaseline="middle"
            fill="white"
            fontSize="10"
          >
            {textContent}
          </text>
        </g>
        <rect
          ref={rectRef}
          fill="none"
          pointerEvents="all"
          width={width}
          height={height}
        />
      </svg>
    </Styles.Wrapper>
  );
};

export default SparkLineGraph;
