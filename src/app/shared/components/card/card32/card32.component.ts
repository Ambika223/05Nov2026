import { Component, OnInit } from '@angular/core';
import { architectureArr } from 'src/app/shared/const/carddata';
import { IarchitectureArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card32',
  templateUrl: './card32.component.html',
  styleUrls: ['./card32.component.scss']
})
export class Card32Component implements OnInit {
  architectureArr: Array<IarchitectureArr> = architectureArr;
  constructor() { }

  ngOnInit(): void {
  }

}
