import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getAdmins(){ 
       return this.httpClient.get(this.SERVER_URL + 'admins');
  }

  public getAdmin(adminId){
       return this.httpClient.get(`${this.SERVER_URL + 'admins'}/${adminId}`); 
  }
  public createAdmin(admin){
      return this.httpClient.post(`${this.SERVER_URL + 'admins'}`, admin)
  }

  public deleteAdmin(adminId){
      return this.httpClient.delete(`${this.SERVER_URL + 'admins'}/${adminId}`)
  }
  public updateAdmin(admin){
      return this.httpClient.put(`${this.SERVER_URL + 'admins'}/${admin.id}`, admin)
  }

}