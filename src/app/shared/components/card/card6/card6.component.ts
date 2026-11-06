import { Component, OnInit } from '@angular/core';
import { psychologyArr } from 'src/app/shared/const/carddata';
import { IpsychologyArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.scss']
})
export class Card6Component implements OnInit {
  psychology1: Array<IpsychologyArr> = psychologyArr;
  constructor() { }

  ngOnInit(): void {
  }

}
