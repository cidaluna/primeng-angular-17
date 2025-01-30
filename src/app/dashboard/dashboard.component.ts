import { Component } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { HorizontalBarChartComponent } from "../horizontal-bar-chart/horizontal-bar-chart.component";
import { DonutChartComponent } from "../donut-chart/donut-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarChartComponent, HorizontalBarChartComponent, DonutChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
