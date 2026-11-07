import { Component, OnInit } from '@angular/core';
import { beverages, beveragesText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list18',
  templateUrl: './list18.component.html',
  styleUrls: ['./list18.component.scss']
})
export class List18Component implements OnInit {
  beveragesText: string = beveragesText;
  beverage1: string[] = beverages;
  constructor() { }

  ngOnInit(): void {
  }

}
