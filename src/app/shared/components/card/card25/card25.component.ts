import { Component, OnInit } from '@angular/core';
import { careerArr } from 'src/app/shared/const/carddata';
import { IcareerArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card25',
  templateUrl: './card25.component.html',
  styleUrls: ['./card25.component.scss']
})
export class Card25Component implements OnInit {
  career1: Array<IcareerArr> = careerArr;
  constructor() { }

  ngOnInit(): void {
  }

}
