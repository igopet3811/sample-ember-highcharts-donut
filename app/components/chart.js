import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ChartComponent extends Component {
  @tracked model = this.args.model;
  chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 1,
      plotShadow: false,
      width: 800,
      height: 600,
    },
    title: {
      text: 'Title of <br>Something by <br>Something Else in <br>Something',
      align: 'center',
      verticalAlign: 'middle',
      // y: 0,
      style: {
        color: 'black',
        fontSize: '12px',
      },
    },
    tooltip: {
      pointFormat: '{point.name}: <b>{point.percentage:.0f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        borderWidth: 5,
        center: ['50%', '50%'],
      },
    },
  };
  chartData = [
    {
      size: '35%',
      borderWidth: 0,
      showInLegend: false,
      enableMouseTracking: false,
      data: [1],
      animation: false,
      colors: ['#EEEEEE'],
      dataLabels: {
        enabled: false,
      },
      type: 'pie',
    },
    {
      size: '80%',
      innerSize: '90%',
      dataLabels: {
        enabled: false,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
      allowPointSelect: true,
      cursor: 'pointer',
      name: 'Browser share',
      data: this.model,
      // data: [
      //   {
      //     name: 'Chrome',
      //     y: 61.41,
      //   },
      //   {
      //     name: 'Internet Explorer',
      //     y: 11.84,
      //   },
      //   {
      //     name: 'Firefox',
      //     y: 10.85,
      //   },
      //   {
      //     name: 'Edge',
      //     y: 4.67,
      //   },
      //   {
      //     name: 'Safari',
      //     y: 4.18,
      //   },
      //   {
      //     name: 'Other',
      //     y: 2.61,
      //   },
      // ],
      type: 'pie',
    },
  ];
}
