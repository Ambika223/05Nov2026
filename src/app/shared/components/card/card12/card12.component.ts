import { Component, OnInit } from '@angular/core';
import { databaseArr } from 'src/app/shared/const/carddata';
import { IdatabaseArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card12',
  templateUrl: './card12.component.html',
  styleUrls: ['./card12.component.scss']
})
export class Card12Component implements OnInit {
  data: Array<IdatabaseArr> = databaseArr;
  constructor() { }

  ngOnInit(): void {
  }

}
