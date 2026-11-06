import { Component, OnInit } from '@angular/core';
import { roboticsArr } from 'src/app/shared/const/carddata';
import { IroboticsArr } from 'src/app/shared/models/card';


@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss'],
})
export class Card3Component implements OnInit {
  roboticsArr: Array<IroboticsArr> = roboticsArr;
  constructor() { }

  ngOnInit(): void {
  }

}
