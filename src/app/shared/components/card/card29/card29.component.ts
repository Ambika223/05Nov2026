import { Component, OnInit } from '@angular/core';
import { travelArr } from 'src/app/shared/const/carddata';
import { ItravelArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card29',
  templateUrl: './card29.component.html',
  styleUrls: ['./card29.component.scss']
})
export class Card29Component implements OnInit {
  travelArr1: Array<ItravelArr> = travelArr;
  constructor() { }

  ngOnInit(): void {
  }

}
