import { Component, OnInit } from '@angular/core';
import { dishes, dishesText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list19',
  templateUrl: './list19.component.html',
  styleUrls: ['./list19.component.scss']
})
export class List19Component implements OnInit {
  dishesText: string = dishesText;
  dishes1: string[] = dishes;
  constructor() { }

  ngOnInit(): void {
  }

}
