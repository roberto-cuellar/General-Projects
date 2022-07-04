import { Component, OnInit, AfterViewInit, ViewChild, HostListener} from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {default as Annotation} from 'chartjs-plugin-annotation';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-luminosidad',
  templateUrl: './luminosidad.component.html',
  styleUrls: ['./luminosidad.component.css']
})
export class LuminosidadComponent implements OnInit,AfterViewInit {

  public innerWidth: number;
  @HostListener('window:resize',['$event'])
    onResize(event:any) {
      this.innerWidth = event.target.innerWidth;
      // console.log(this.innerWidth)
      // if(window.innerWidth<400){
      //    this.innerWidth = 380;
      // }
      this.chart?.chart?.update();
      

      // this.chart?.update();
    }


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Luminosidad',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 180, 480, 770, 90, 1000, 270, 400 ],
        label: 'Series C',
        yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
      },
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    // plugins: {
    //   legend: { display: true },
    //   annotation: {
    //     annotations: [
    //       {
    //         type: 'line',
    //         scaleID: 'x',
    //         value: 'March',
    //         borderColor: 'orange',
    //         borderWidth: 2,
    //         label: {
    //           position: 'center',
    //           enabled: true,
    //           color: 'orange',
    //           content: 'LineAnno',
    //           font: {
    //             weight: 'bold'
    //           }
    //         }
    //       },
    //     ],
    //   }
    // }
  };

  public lineChartType: ChartType = 'line';
  
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private _snackBar: MatSnackBar) { 
    Chart.register(Annotation);
    this.innerWidth = 2300;
  }

  ngAfterViewInit(): void {
      this.openSnackBar();
  }

  openSnackBar(){
    this._snackBar.open('Estado de la Conexión','Cerrar');
  }

  ngOnInit(): void {
  }

}
