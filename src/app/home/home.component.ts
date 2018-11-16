import { Component, OnInit} from '@angular/core';
import { Trainer } from '../model/trainer';
import { Pokemon } from '../model/pokemon';
import { TrainerService} from '../trainer.service';
import { PokemonList } from '../data/pokemon.json';
import { TypeList } from '../data/typelist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trainers: Trainer[] = [];
  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService.getRecent().subscribe(trainers => {

      this.trainers = trainers.map(function(trainer) {
                                                      trainer.heeft = trainer.heeft.map(function(poke) {poke.naam = PokemonList[poke.id-1]; poke.typenaam = TypeList[poke.type]; return poke;});
                                                      trainer.zoekt = trainer.zoekt.map(function(poke) {poke.naam = PokemonList[poke.id-1]; poke.typenaam = TypeList[poke.type]; return poke;});
                                                      return trainer;
                                                      });
      });
  }

}
