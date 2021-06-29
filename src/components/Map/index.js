import React from 'react';
import Chart from 'react-google-charts';

export default ({
  data, options, width, height,
}) => (
  <Chart
    width={width}
    height={height}
    chartType="GeoChart"
    data={data}
    options={options}
    mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
    rootProps={{ 'data-testid': '4' }}
  />
);
