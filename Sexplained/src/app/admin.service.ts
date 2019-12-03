import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL: string = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  public getUsers(){ 
       return this.httpClient.get(this.SERVER_URL + 'admins');
  }

  public getUser(adminId){
       return this.httpClient.get(`${this.SERVER_URL + 'admins'}/${adminId}`); 
  }
  public createAdmin(admin){
      return this.httpClient.post(`${this.SERVER_URL + 'admins'}`, admin)
  }

  public deleteAdmin(adminId){
      return this.httpClient.delete(`${this.SERVER_URL + 'admins'}/${adminId}`)
  }
  public updateAdmin(admin){
      return this.httpClient.patch(`${this.SERVER_URL + 'admins'}/${admin.id}`, admin)
  }

}