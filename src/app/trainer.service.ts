import { Injectable } from '@angular/core';
import { Trainer } from './model/trainer';
import { Pokemon } from './model/pokemon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  trainerList: Trainer[] = [
    { naam: 'chrisvanart', heeft: [{id:1,naam:'Cyndaquil'},{id:3,naam:'Bulbasaur'}], zoekt: [{id:4,naam:'Kyogre'},{id:6,naam:'Plusle'}]},
    { naam: 'elifeli94', heeft: [{id:6,naam:'Plusle'},{id:1,naam:'Cyndaquil'}], zoekt: [{id:2,naam:'Duskull'}]},
    ];

  constructor() { }

  getTrainers(): Trainer[] {

    return this.trainerList;
  }

  getZoekPokemon(id: number): Observable<Trainer[]> {
    var resultList: Trainer[] = [];
    for(let x=0;x<this.trainerList.length;x++)
    {
        for(let y=0;y<this.trainerList[x].zoekt.length;y++)
        {
          if(this.trainerList[x].zoekt[y].id===id)
          {
            resultList.push(this.trainerList[x]);
            break;
          }
        }
    }
    return of(resultList);
  }

  getHeeftPokemon(id: number): Observable<Trainer[]> {
    var resultList: Trainer[] = [];
    for(let x=0;x<this.trainerList.length;x++)
    {
        for(let y=0;y<this.trainerList[x].heeft.length;y++)
        {
          if(this.trainerList[x].heeft[y].id===id)
          {
            resultList.push(this.trainerList[x]);
            break;
          }
        }
    }
    return of(resultList);
  }
}
