import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-form-chart',
  templateUrl: './form-chart.component.html',
  styleUrls: ['./form-chart.component.scss']
})
export class FormChartComponent implements OnInit {
	charts: any[] = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
  	this.chartService.getCharts().subscribe((charts: any[]) => {
            this.charts = charts;
        });
  	
  }

}
