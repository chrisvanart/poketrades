import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonList }  from '../data/pokemon.json';
import { Pokemon } from '../model/pokemon';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  results: Pokemon[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchPokemon();
  }

  searchPokemon(): void {
    this.results = [];
    const term:string = this.route.snapshot.paramMap.get('term');
    for(let x=0;x<PokemonList.length;x++)
    {
      if(PokemonList[x].toLowerCase().includes(term.toLowerCase())) this.results.push({id: x+1, naam: PokemonList[x],type:0,typenaam:''});
    }
  }

}
