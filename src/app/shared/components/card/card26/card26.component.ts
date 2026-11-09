import { Component, OnInit } from '@angular/core';
import { mobileDevArr } from 'src/app/shared/const/carddata';
import { ImobileDevArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card26',
  templateUrl: './card26.component.html',
  styleUrls: ['./card26.component.scss']
})
export class Card26Component implements OnInit {
  mobile1: Array<ImobileDevArr> = mobileDevArr;
  constructor() { }

  ngOnInit(): void {
  }

}
