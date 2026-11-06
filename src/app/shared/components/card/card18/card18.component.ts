import { Component, OnInit } from '@angular/core';
import { devOpsArr } from 'src/app/shared/const/carddata';
import { IdevOpsArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card18',
  templateUrl: './card18.component.html',
  styleUrls: ['./card18.component.scss']
})
export class Card18Component implements OnInit {
  devops1: Array<IdevOpsArr> = devOpsArr;
  constructor() { }

  ngOnInit(): void {
  }

}
