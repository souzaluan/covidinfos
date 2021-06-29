/* eslint-disable react/prop-types */
import React from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ data, options }) => (
  <Chart
    width="100%"
    height="400px"
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={data}
    options={options}
    rootProps={{ 'data-testid': '1' }}
  />
);
export default LineChart;
