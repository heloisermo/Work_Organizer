import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';

@Injectable({
  providedIn: 'root', 
})
export class ApiService {
    private apiUrl_select = 'http://localhost:3000/users/list';
    private apiUrl_insert = 'http://localhost:3000/users/create';
    constructor(private http: HttpClient) {}

    getUsers()
    {
        return this.http.get(this.apiUrl_select);
    }

    createUser(user: any)
    {
        return this.http.post(this.apiUrl_insert, user);
    }
    
    connectUser(user: any)
    {
        const apiUrl_connect = 'http://localhost:3000/users/' + user.email;
        console.log(apiUrl_connect);
        return this.http.get(apiUrl_connect, user);
    }
}
