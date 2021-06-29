const optionsLineChart = {
  cases_deaths: {
    backgroundColor: '#fff',
    legend: {
      textStyle: {
        color: 'red',
      },
    },
    series: {
      0: {
        lineWidth: 3,
        color: 'red',
      },
    },
    hAxis: {
      textStyle: {
        color: 'red',
      },
    },
    vAxis: {
      textStyle: {
        color: 'red',
      },
    },
  },
  recovered: {
    backgroundColor: '#fff',
    legend: {
      textStyle: {
        color: 'green',
      },
    },
    series: {
      0: {
        lineWidth: 3,
        color: 'green',
      },
    },
    hAxis: {
      textStyle: {
        color: 'green',
      },
    },
    vAxis: {
      textStyle: {
        color: 'green',
      },
    },
  },
};
export default optionsLineChart;
