import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../Data';
import { ChartService } from '../chart.service';
import { AdminService } from '../admin.service';


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
  admins: any[] = [];
  adminId = 3;
	chart = new Chart('canvas 1', {});

  constructor(private httpClient: HttpClient, private chartService: ChartService, private adminService: AdminService) { }

  ngOnInit() {
  	this.chartService.getCharts().subscribe((charts: any[]) => {
            this.charts = charts;
        });
    this.adminService.getAdmins().subscribe((admins: any[]) => {
            this.admins = admins;
            console.log(this.admins);
        });

  	this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        console.log(this.admins.modules);
        if(this.admins[2].modules.includes(y.numero)){
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
  }
}
