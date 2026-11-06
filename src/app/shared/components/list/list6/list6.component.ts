import { Component, OnInit } from '@angular/core';
import { vehicles, vehiclesText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list6',
  templateUrl: './list6.component.html',
  styleUrls: ['./list6.component.scss']
})
export class List6Component implements OnInit {
  vehiclesText = vehiclesText;
  vehicles = vehicles;
  constructor() { }

  ngOnInit(): void {
  }

}
