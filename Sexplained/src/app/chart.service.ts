import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getCharts(){ 
       return this.httpClient.get(this.SERVER_URL + 'charts');
  }

  public getChart(chartId){
       return this.httpClient.get(`${this.SERVER_URL + 'charts'}/${chartId}`); 
  }
  public createChart(chart){
      return this.httpClient.post(`${this.SERVER_URL + 'charts'}`, chart)
  }

  public deleteChart(chartId){
      return this.httpClient.delete(`${this.SERVER_URL + 'charts'}/${chartId}`)
  }
  public updateChart(chart){
      return this.httpClient.put(`${this.SERVER_URL + 'charts'}/${chart.id}`, chart)
  }

}