import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-horizontal-bar-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrl: './horizontal-bar-chart.component.scss'
})
export class HorizontalBarChartComponent {
  basicData = {
    labels:
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'],
    datasets: [
        {
            label: 'Booked',
            backgroundColor: 'green',
            data: [66, 49, 81, 71, 26, 65, 60]
        },

    ]
};

horizontalOptions = {
    indexAxis: 'y',
    plugins: {
        legend: {
            labels: {
                color: '#black'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#black'
            },
            grid: {
                color: 'rgba(255,255,255,0.2)'
            }
        },
        y: {
            ticks: {
                color: '#black'
            },
            grid: {
                color: 'rgba(255,255,255,0.2)'
            }
        }
    }
};
}
