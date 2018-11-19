import { Injectable } from '@angular/core';
import { Pokemon } from './model/pokemon';
import { Observable, of } from 'rxjs';

import { PokemonList } from './data/pokemon.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() {}

  getPokemon(id: number): Observable<string> {

    return of(PokemonList[id]);
  }



}
