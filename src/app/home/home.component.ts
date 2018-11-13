import { Component, OnInit} from '@angular/core';
import { Trainer } from '../model/trainer';
import { Pokemon } from '../model/pokemon';
import { TrainerService} from '../trainer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trainers: Trainer[] = [];
  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainers = this.trainerService.getTrainers();
  }

}
