import { Component, OnInit } from '@angular/core';
import { spaceArr } from 'src/app/shared/const/carddata';
import { IspaceArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card16',
  templateUrl: './card16.component.html',
  styleUrls: ['./card16.component.scss']
})
export class Card16Component implements OnInit {
  space1: Array<IspaceArr> = spaceArr;
  constructor() { }

  ngOnInit(): void {
  }

}
