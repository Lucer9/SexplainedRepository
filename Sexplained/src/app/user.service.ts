import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class UserService {

    SERVER_URL: string = "http://localhost:3000/";
    constructor(private httpClient: HttpClient) {}

    public getUsers() {
        return this.httpClient.get(this.SERVER_URL + 'users');
    }

    public getUser(userId) {
        return this.httpClient.get(`${this.SERVER_URL + 'users'}/${userId}`);
    }
    public createUser(user) {
        return this.httpClient.post(`${this.SERVER_URL + 'users'}`, user)
    }

    public deleteUser(userId) {
        return this.httpClient.delete(`${this.SERVER_URL + 'users'}/${userId}`)
    }
    public updateUser(user) {
        return this.httpClient.put(`${this.SERVER_URL + 'users'}/${user.id}`, user)
    }



}