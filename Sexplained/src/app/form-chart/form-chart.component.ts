import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../Data';

@Component({
  selector: 'app-form-chart',
  templateUrl: './form-chart.component.html',
  styleUrls: ['./form-chart.component.scss']
})
export class FormChartComponent implements OnInit {
  title = 'app';
  data: Data[];
  url = 'http://localhost:4000/estadisticas';
  nombre = [];
  visitas = [];
  compras = [];
  ganancias = [];
  chart = new Chart('canvas', {});

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  	this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.nombre.push(y.nombre);
        this.visitas.push(y.visitas);
        this.compras.push(y.compras);
        this.ganancias.push(y.ganancias);
      });
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.nombre,
          datasets: [
            {
              data: this.visitas,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  	
  }

}
