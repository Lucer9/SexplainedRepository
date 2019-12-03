import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CardService {

  SERVER_URL: string = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  public getCards(){ 
       return this.httpClient.get(this.SERVER_URL + 'modules');
  }

  public getCard(cardId){
       return this.httpClient.get(`${this.SERVER_URL + 'modules'}/${cardId}`); 
  }
  public createCard(card){
      return this.httpClient.post(`${this.SERVER_URL + 'modules'}`, card)
  }

  public deleteCard(cardId){
      return this.httpClient.delete(`${this.SERVER_URL + 'modules'}/${cardId}`)
  }
  public updateCard(card){
      return this.httpClient.patch(`${this.SERVER_URL + 'modules'}/${card.id}`, card)
  }

}