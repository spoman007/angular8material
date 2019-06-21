import { Component } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {
  chart = new Chart({
    chart: {
      type:  'bar'
    },
    title: {
      text: 'Sample chart'
    },
    credits: {
      enabled: false
    },
    series: [
      <Highcharts.SeriesColumnOptions>  {
        name: 'chart',
        data: [1, 2, 3, 6, 9, 1]
      }
    ] 
  });

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}