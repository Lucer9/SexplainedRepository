import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  SERVER_URL: string = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  public getSurveys(){ 
       return this.httpClient.get(this.SERVER_URL + 'surveys');
  }

  public getSurvey(surveyId){
       return this.httpClient.get(`${this.SERVER_URL + 'surveys'}/${surveyId}`); 
  }
  public createSurvey(survey){
      return this.httpClient.post(`${this.SERVER_URL + 'surveys'}`, survey)
  }

  public deleteSurvey(surveyId){
      return this.httpClient.delete(`${this.SERVER_URL + 'surveys'}/${surveyId}`)
  }
  public updateSurvey(survey){
      return this.httpClient.patch(`${this.SERVER_URL + 'surveys'}/${survey.id}`, survey)
  }

}