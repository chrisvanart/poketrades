import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poketrades';


  constructor(public messageService: MessageService,private router: Router) {

  }

  searchSubmit(term: string): void {
    this.router.navigate([`/search/${term}`]);
  }
}
