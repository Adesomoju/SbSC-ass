import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectChartData: ChartDataSets[] = [
    { data: [120, 50, 70, 100], label: 'Numbers of Projected Trips' },
  ];

  projectChartLabels: Label[] = ['Male', 'Female', 'Transgender', 'Others'];

  projectChartOptions = {
    responsive: true,
  };
  projectChartLegend = true;
  projectChartType = 'doughnut';

}
