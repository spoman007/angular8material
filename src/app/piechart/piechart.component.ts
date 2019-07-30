import { Component } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  chart = new Chart({
    chart: {
      type:  'pie'
    },
    title: {
      text: 'Pie chart'
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