import { Component, OnInit } from '@angular/core';
import { cities, citiesText, colors, colorsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.scss']
})
export class List4Component implements OnInit {
  citiesText = citiesText;
  cities = cities;

  constructor() { }

  ngOnInit(): void {
  }

}
