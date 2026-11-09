import { Component, OnInit } from '@angular/core';
import { foodArr } from 'src/app/shared/const/carddata';
import { IfoodArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card28',
  templateUrl: './card28.component.html',
  styleUrls: ['./card28.component.scss']
})
export class Card28Component implements OnInit {
  foodArr1: Array<IfoodArr> = foodArr;
  constructor() { }

  ngOnInit(): void {
  }

}
