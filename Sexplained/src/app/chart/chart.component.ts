import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../Data';
import { ChartService } from '../chart.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
	closeResult: string;
	@Input()id = '';
	@Input()title = 'app';
	data: Data[];
	url = 'http://localhost:4000/estadisticas';
	nombres = [];
	visitas = [];
	compras = [];
	ganancias = [];
	myString = '';
	@Input()atributo = "";
	charts: any[] = [];
  adminId = 3;
  admin;
	chart = new Chart('canvas', {});

  constructor(private httpClient: HttpClient, private chartService: ChartService, private userService: UserService) { }

  ngOnInit() {
  	this.chartService.getCharts().subscribe((charts: any[]) => {
            this.charts = charts;
        })
    this.userService.getUser(this.adminId).subscribe((admin: any[]) => {
            this.admin = admin;
            this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        if(this.admin.modules.includes(y.numero)){
          this.nombres.push(y.nombre);
          eval('this.'+this.atributo+'.push(y.'+this.atributo+');');
        }
      });
      this.chart = new Chart(this.id, {
        type: 'bar',
        data: {
          labels: this.nombres,
          datasets: [
            {
              data: eval('this.'+this.atributo),
              borderColor: '#FFFFFF',
              backgroundColor: ["#C4FAF8", "#DBFFD6", "#FFFFD1", "#FFCCF9", "#FFCBC1", "#AFCBFF"], 
              fill: true
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
        })


  }
}
