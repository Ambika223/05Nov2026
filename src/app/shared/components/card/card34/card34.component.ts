import { Component, OnInit } from '@angular/core';
import { gamingArr } from 'src/app/shared/const/carddata';
import { IgamingArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card34',
  templateUrl: './card34.component.html',
  styleUrls: ['./card34.component.scss']
})
export class Card34Component implements OnInit {
  gamingArr1: Array<IgamingArr> = gamingArr;
  constructor() { }

  ngOnInit(): void {
  }

}
