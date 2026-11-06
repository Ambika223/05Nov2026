import { Component, OnInit } from '@angular/core';
import { historyArr } from 'src/app/shared/const/carddata';
import { IhistoryArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card15',
  templateUrl: './card15.component.html',
  styleUrls: ['./card15.component.scss']
})
export class Card15Component implements OnInit {
  history1: Array<IhistoryArr> = historyArr;
  constructor() { }

  ngOnInit(): void {
  }

}
