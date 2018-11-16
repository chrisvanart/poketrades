import { Component, OnInit } from '@angular/core';
import { Trainer } from '../model/trainer';
import { Pokemon } from '../model/pokemon';
import { TrainerService} from '../trainer.service';
import { PokemonList } from '../data/pokemon.json';
import { TypeList } from '../data/typelist';
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
  type: string;
  zoekTrainers: Trainer[] = [];
  heeftTrainers: Trainer[] = [];

  constructor(private trainerService: TrainerService, private route: ActivatedRoute,private location: Location,private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.getPokemonData();
  }

  getPokemonData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const type = +this.route.snapshot.paramMap.get('type');
    if(id < 1 || id > 800 || type < -1 || type > TypeList.length)
    {
      this.messageService.addError('Onbekend Pokemonnummer');
       this.router.navigate(['/home']);
       return;
    }
    this.pokemon = PokemonList[id-1];
    this.type = TypeList[type];
    this.trainerService.getZoekPokemon(id,type)
      .subscribe(trainers => this.zoekTrainers = trainers);
    this.trainerService.getHeeftPokemon(id,type)
      .subscribe(trainers => this.heeftTrainers = trainers);

  }

}
