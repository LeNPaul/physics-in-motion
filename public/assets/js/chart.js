// Font stack matches what the default for Bootstrap is
Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
Chart.defaults.global.defaultFontSize = '14';

function chartConfig(chartTitle, xLabel, xData, yLabel, yData) {
  return {
    type: 'line',
    data: {
      labels: xData,
      datasets: [{
        data: yData,
      }]
    },
    options: {
      title: {
        display: true,
        text: chartTitle
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: yLabel
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: xLabel
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 20
        }
      }
    }
  }
};
