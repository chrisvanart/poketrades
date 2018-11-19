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

  getTrainer(id: number): Observable<Trainer> {
    return this.http.get<Trainer>(`${config.apiUrl}/1/trainer/${id}`);
  }

  addPokemon(pokemonId: number, type: number, trainerId: number, gezocht:number): Observable<any> {
    return this.http.post<any>(`${config.apiUrl}/1/add_pokemon`,{pokemonId:pokemonId,type:type,trainerId:trainerId,gezocht:gezocht});
  }

  deletePokemon(pokemonId: number, type: number, trainerId: number, gezocht:number): Observable<any> {
    return this.http.post<any>(`${config.apiUrl}/1/remove_pokemon`,{pokemonId:pokemonId,type:type,trainerId:trainerId,gezocht:gezocht});
  }

  getZoekPokemon(id: number,type:number): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${config.apiUrl}/1/trainer_wants/${id}/${type}`);
  }

  getHeeftPokemon(id: number,type:number): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${config.apiUrl}/1/trainer_has/${id}/${type}`);
  }
}
