import { Component, OnInit } from '@angular/core';
import { educationArr } from 'src/app/shared/const/carddata';
import { IeducationArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card9',
  templateUrl: './card9.component.html',
  styleUrls: ['./card9.component.scss']
})
export class Card9Component implements OnInit {
  education1: Array<IeducationArr> = educationArr;
  constructor() { }

  ngOnInit(): void {
  }

}
