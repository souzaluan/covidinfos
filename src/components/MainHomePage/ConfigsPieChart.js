const options = {
  cases: {
    title: 'Continents and Cases today',
    titleTextStyle: {
      color: 'rgba(19,19,19,255)',
      fontSize: '15',
    },
    pieHole: 1,
    backgroundColor: 'transparent',
    slices: [
      {
        color: '#cc0000',
      },
      {
        color: '#ff2400',
      },
      {
        color: '#ff4500',
      },
      {
        color: '#ff8c00',
      },
      {
        color: '#ffff00',
      },
      {
        color: '#ffff00',
      },
    ],
    legend: 'none',
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      width: '100%',
      height: '90%',
    },
    is3D: true,
  },
  recovered: {
    title: 'Continents and Recovered today',
    titleTextStyle: {
      color: 'rgba(19,19,19,255)',
      fontSize: '15',
    },
    pieHole: 1,
    backgroundColor: 'transparent',
    slices: [
      {
        color: '#008000',
      },
      {
        color: '#0f6a08',
      },
      {
        color: '#14540d',
      },
      {
        color: '#15400e',
      },
      {
        color: '#132c0d',
      },
      {
        color: '#0f1a07',
      },
    ],
    legend: 'none',
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      width: '100%',
      height: '90%',
    },
    is3D: true,
  },
};

export default options;
