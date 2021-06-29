import React from 'react';
import Chart from 'react-google-charts';

export default ({ data, options, height }) => (
  <Chart
    width="inherit"
    height={height}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={data}
    options={options}
  />
);
