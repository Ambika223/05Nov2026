import { Component, OnInit } from '@angular/core';
import { sportsArr } from 'src/app/shared/const/carddata';
import { IsportsArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card20',
  templateUrl: './card20.component.html',
  styleUrls: ['./card20.component.scss']
})
export class Card20Component implements OnInit {
  sports1: Array<IsportsArr> = sportsArr;
  constructor() { }

  ngOnInit(): void {
  }

}
