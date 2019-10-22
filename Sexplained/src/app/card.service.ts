import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CardService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getCards(){ 
       return this.httpClient.get(this.SERVER_URL + 'cards');
  }

  public getCard(cardId){
       return this.httpClient.get(`${this.SERVER_URL + 'cards'}/${cardId}`); 
  }
  public createCard(card){
      return this.httpClient.post(`${this.SERVER_URL + 'cards'}`, card)
  }

  public deleteCard(cardId){
      return this.httpClient.delete(`${this.SERVER_URL + 'cards'}/${cardId}`)
  }
  public updateCard(card){
      return this.httpClient.put(`${this.SERVER_URL + 'cards'}/${card.id}`, card)
  }

}