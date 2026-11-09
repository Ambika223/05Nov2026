import { Component, OnInit } from '@angular/core';
import { chemistryArr } from 'src/app/shared/const/carddata';
import { IchemistryArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card24',
  templateUrl: './card24.component.html',
  styleUrls: ['./card24.component.scss']
})
export class Card24Component implements OnInit {
  chemistry1: Array<IchemistryArr> = chemistryArr;
  constructor() { }

  ngOnInit(): void {
  }

}
