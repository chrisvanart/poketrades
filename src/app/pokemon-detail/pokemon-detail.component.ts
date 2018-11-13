import { Component, OnInit } from '@angular/core';
import { Trainer } from '../model/trainer';
import { Pokemon } from '../model/pokemon';
import { TrainerService} from '../trainer.service';
import { PokemonService} from '../pokemon.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;
  zoekTrainers: Trainer[] = [];
  heeftTrainers: Trainer[] = [];

  constructor(private trainerService: TrainerService, private pokemonService: PokemonService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.getPokemonData();
  }

  getPokemonData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
    this.trainerService.getZoekPokemon(id)
      .subscribe(trainers => this.zoekTrainers = trainers);
    this.trainerService.getHeeftPokemon(id)
      .subscribe(trainers => this.heeftTrainers = trainers);
  }

}
