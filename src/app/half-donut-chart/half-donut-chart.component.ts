import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-half-donut-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './half-donut-chart.component.html',
  styleUrl: './half-donut-chart.component.scss'
})
export class HalfDonutChartComponent {
  data = {};
  options = {};

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [200, 50, 100],
                  backgroundColor: ['#000D88', '#FF68B2', '#455677'],
                  hoverBackgroundColor: ['#000D99', '#FF61BB', '#455699']
              }
          ]
      };


      this.options = {
          cutout: '65%',
          rotation: -90,
          circumference: 180,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          }
      };
  }

}
