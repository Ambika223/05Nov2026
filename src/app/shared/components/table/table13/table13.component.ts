import { Component, OnInit } from '@angular/core';
import { restaurantArr } from 'src/app/shared/const/tabledata';
import { IrestaurantArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table13',
  templateUrl: './table13.component.html',
  styleUrls: ['./table13.component.scss']
})
export class Table13Component implements OnInit {
  restaurantArr: Array<IrestaurantArr> = restaurantArr;
  constructor() { }

  ngOnInit(): void {
  }

}
