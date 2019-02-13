import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './config';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(username: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/1/register`, {username: username, password: password });
      }
}
