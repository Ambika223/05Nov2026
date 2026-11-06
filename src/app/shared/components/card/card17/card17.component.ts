import { Component, OnInit } from '@angular/core';
import { financeArr } from 'src/app/shared/const/carddata';
import { IfinanceArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card17',
  templateUrl: './card17.component.html',
  styleUrls: ['./card17.component.scss']
})
export class Card17Component implements OnInit {
  finance1: Array<IfinanceArr> = financeArr;
  constructor() { }

  ngOnInit(): void {
  }

}
