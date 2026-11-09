import { Component, OnInit } from '@angular/core';
import { environmentArr } from 'src/app/shared/const/carddata';
import { IenvironmentArray } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card21',
  templateUrl: './card21.component.html',
  styleUrls: ['./card21.component.scss']
})
export class Card21Component implements OnInit {
  [x: string]: any;
  environments: Array<IenvironmentArray> = environmentArr;

  constructor() { }

  ngOnInit(): void {
  }

}
