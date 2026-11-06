import { Component, OnInit } from '@angular/core';
import { cloudArr } from 'src/app/shared/const/carddata';
import { IcloudArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card10',
  templateUrl: './card10.component.html',
  styleUrls: ['./card10.component.scss']
})
export class Card10Component implements OnInit {
  cloud1: Array<IcloudArr> = cloudArr;
  constructor() { }

  ngOnInit(): void {
  }

}
