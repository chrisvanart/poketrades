import { Injectable } from '@angular/core';
import { Pokemon } from './model/pokemon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonList: Pokemon[] = [
    {id: 1, naam: 'Cyndaquil'},
    {id: 2, naam: 'Duskull'},
    {id: 3, naam: 'Bulbasaur'},
    {id: 4, naam: 'Kyogre'},
    {id: 5, naam: 'Minun'},
    {id: 6, naam: 'Plusle'},
    ];
  constructor() { }

  getPokemon(id: number): Observable<Pokemon> {
    return of(this.pokemonList.find(pokemon => pokemon.id === id));
  }
}
