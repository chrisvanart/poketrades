import { Injectable } from '@angular/core';
import { Trainer } from './model/trainer';
import { Observable, of } from 'rxjs';
import { config } from './config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {


  constructor(private http: HttpClient) { }

  getRecent(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${config.apiUrl}/1/recent_changes`);

  }



  getZoekPokemon(id: number,type:number): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${config.apiUrl}/1/trainer_wants/${id}/${type}`);
  }

  getHeeftPokemon(id: number,type:number): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${config.apiUrl}/1/trainer_has/${id}/${type}`);
  }
}
