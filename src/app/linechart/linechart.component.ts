import { Component } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Projects'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'chart',
        data: [1, 2, 3, 6, 9, 1]
      } as Highcharts.SeriesColumnOptions
    ]
  });
}
