import { Component, OnInit } from '@angular/core';
import { healthArr } from 'src/app/shared/const/carddata';
import { IhealthArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card14',
  templateUrl: './card14.component.html',
  styleUrls: ['./card14.component.scss']
})
export class Card14Component implements OnInit {
  health1: Array<IhealthArr> = healthArr;
  constructor() { }

  ngOnInit(): void {
  }

}
