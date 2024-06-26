// src/components/Tracker/CircleChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';

const CircleChart = ({ series, labels }) => {
  const options = {
    chart: {
      width: '140%', // Lebar chart diatur menjadi 100% dari container
      height: '450px', // Tinggi chart disesuaikan untuk memperbesar lingkaran
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '50%', // Ukuran lingkaran diatur di sini
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          showOn: 'always',
          name: {
            offsetY: -30,
            show: true,
            color: '#888',
            fontSize: '13px',
          },
          value: {
            color: '#111',
            fontSize: '60px',
            show: true,
            formatter: function (val) {
              return val;
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: labels,
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="radialBar" height={450} />
    </div>
  );
};

export default CircleChart;
