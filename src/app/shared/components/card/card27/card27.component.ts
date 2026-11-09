import { Component, OnInit } from '@angular/core';
import { dataScienceArr } from 'src/app/shared/const/carddata';
import { IdataScienceArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card27',
  templateUrl: './card27.component.html',
  styleUrls: ['./card27.component.scss']
})
export class Card27Component implements OnInit {
  dataScienceArr: Array<IdataScienceArr> = dataScienceArr;
  constructor() { }

  ngOnInit(): void {
  }

}
