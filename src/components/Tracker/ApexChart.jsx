// src/components/Tracker/ApexChart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { dummyMentoringHistory } from '../../data/dummyMentoringHistory'; // Import data

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    // Extract the scores for visualization
    const listeningScores = dummyMentoringHistory.map(entry => entry.listeningScore);
    const grammarScores = dummyMentoringHistory.map(entry => entry.grammarScore);
    const pronunciationScores = dummyMentoringHistory.map(entry => entry.pronunciationScore);
    const dates = dummyMentoringHistory.map(entry => entry.date);

    this.state = {
      series: [
        { name: "Listening", data: listeningScores },
        { name: "Grammar", data: grammarScores },
        { name: "Pronunciation", data: pronunciationScores }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Mentoring Scores by Date',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: dates,
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
