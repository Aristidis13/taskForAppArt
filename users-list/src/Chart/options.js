export const options = {
    chart: {
        type: 'pie',
    },
    plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          },
          showInLegend: true
        }
      },
    title: {
      text: 'Titles Distribution'
    },
    series: [{
      data: []
    }]
}