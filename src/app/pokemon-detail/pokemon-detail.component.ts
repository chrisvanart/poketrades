import { Component, OnInit } from '@angular/core';
import { Trainer } from '../model/trainer';
import { Pokemon } from '../model/pokemon';
import { TrainerService} from '../trainer.service';
import { PokemonList } from '../data/pokemon.json';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {

  pokemon: string;
  zoekTrainers: Trainer[] = [];
  heeftTrainers: Trainer[] = [];

  constructor(private trainerService: TrainerService, private route: ActivatedRoute,private location: Location,private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.getPokemonData();
  }

  getPokemonData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id < 1 || id > 800)
    {
      this.messageService.addError('Onbekend Pokemonnummer');
       this.router.navigate(['/home']);
       return;
    }
    this.pokemon = PokemonList[id-1];
    this.trainerService.getZoekPokemon(id)
      .subscribe(trainers => this.zoekTrainers = trainers);
    this.trainerService.getHeeftPokemon(id)
      .subscribe(trainers => this.heeftTrainers = trainers);
    this.messageService.addError('Klopt niet');
  }

}
