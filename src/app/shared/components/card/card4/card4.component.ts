import { Component, OnInit } from '@angular/core';
import { businessArr } from 'src/app/shared/const/carddata';
import { IbusinessArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.scss']
})
export class Card4Component implements OnInit {
  business1: Array<IbusinessArr> = businessArr;
  constructor() { }

  ngOnInit(): void {
  }

}
