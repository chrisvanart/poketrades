import { Component, OnInit } from '@angular/core';
import { TypeList } from '../data/typelist';
import { PokemonList } from '../data/pokemon.json';
import { MessageService } from '../message.service';
import { TrainerService } from '../trainer.service';
import { AuthenticationService } from '../authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Trainer } from '../model/trainer';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  typeList: string[] = [];
  resultList: string[] = [];

  trainerDetails: Trainer;

  constructor(private messageService: MessageService, private trainerService: TrainerService, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.typeList = TypeList;
    this.getTrainer();
  }

  getTrainer():void {
    let trainerId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.trainerService.getTrainer(trainerId).subscribe(trainer =>
      {
        trainer.heeft = trainer.heeft.map(function(poke) {poke.naam = PokemonList[poke.id-1]; poke.typenaam = TypeList[poke.type]; return poke;});
        trainer.zoekt = trainer.zoekt.map(function(poke) {poke.naam = PokemonList[poke.id-1]; poke.typenaam = TypeList[poke.type]; return poke;});
        this.trainerDetails = trainer;

      });
  }

  search(term:string): void {

      this.resultList = PokemonList.filter(function(item) {return item.toLowerCase().includes(term.toLowerCase()); });
  }

  add(name:string, type:string,gezocht:number) {
    var pokemonId = 0;
    for(let x=0;x<PokemonList.length;x++)
    {
      if(PokemonList[x]==name) {pokemonId = x+1;break;}
    }

    this.trainerService.addPokemon(pokemonId,parseInt(type),JSON.parse(localStorage.getItem('currentUser')).id,gezocht).subscribe(response =>
      {
        this.messageService.clear();
        this.messageService.addNotification("Pokemon toegevoegd");
        this.getTrainer();
      },
      error => {this.messageService.addError(error);  }
    );
  }

  deletePokemon(id:number,type:number,gezocht:number): void {
    this.trainerService.deletePokemon(id,type,JSON.parse(localStorage.getItem('currentUser')).id,gezocht).subscribe(response => {this.getTrainer();});
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }

}
