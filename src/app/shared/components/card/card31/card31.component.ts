import { Component, OnInit } from '@angular/core';
import { lawArr } from 'src/app/shared/const/carddata';
import { IlawArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card31',
  templateUrl: './card31.component.html',
  styleUrls: ['./card31.component.scss']
})
export class Card31Component implements OnInit {
  lawArr1: Array<IlawArr> = lawArr;
  constructor() { }

  ngOnInit(): void {
  }

}
