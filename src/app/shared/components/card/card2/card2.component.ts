import { Component, OnInit } from '@angular/core';
import { mathArr } from 'src/app/shared/const/carddata';
import { ImathArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
  mathArr: Array<ImathArr> = mathArr;

  constructor() { }

  ngOnInit(): void {
  }

}
