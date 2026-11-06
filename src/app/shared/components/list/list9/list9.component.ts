import { Component, OnInit } from '@angular/core';
import { countries, countriesText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list9',
  templateUrl: './list9.component.html',
  styleUrls: ['./list9.component.scss']
})
export class List9Component implements OnInit {


  countriesText: string = countriesText;
  country1: string[] = countries;
  constructor() { }

  ngOnInit(): void {
  }

}
