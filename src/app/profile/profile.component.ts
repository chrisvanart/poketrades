import { Component, OnInit } from '@angular/core';
import { TypeList } from '../data/typelist';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  typeList: string[] = [];

  constructor() { }

  ngOnInit() {
    this.typeList = TypeList;
  }

}
