import { Component, OnInit } from '@angular/core';
import { biologyArr } from 'src/app/shared/const/carddata';
import { IbiologyArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card7',
  templateUrl: './card7.component.html',
  styleUrls: ['./card7.component.scss']
})
export class Card7Component implements OnInit {
  biology1: Array<IbiologyArr> = biologyArr;
  constructor() { }

  ngOnInit(): void {
  }

}
