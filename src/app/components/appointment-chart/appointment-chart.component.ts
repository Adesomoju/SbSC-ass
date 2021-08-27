import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-appointment-chart',
  templateUrl: './appointment-chart.component.html',
  styleUrls: ['./appointment-chart.component.scss']
})
export class AppointmentChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentChartLegend = true;
  // lineChartPlugins = [];
  currentChartType = 'bar';

  projectChartData: ChartDataSets[] = [
    { data: [95, 72, 78, 75, 75, 75, 82, 70, 45, 89, 45, 120]},
    { data: [90, 71, 73, 74, 77, 72, 95, 80, 85, 99, 85, 180] },

  ];

  projectChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  projectChartOptions = {
    responsive: true,
  };

  projectChartLegend = true;
  projectChartPlugins = [];
  projectChartType = 'bar';

}
