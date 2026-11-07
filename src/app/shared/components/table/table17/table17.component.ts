import { Component, OnInit } from '@angular/core';
import { cityArr } from 'src/app/shared/const/tabledata';
import { IcityArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table17',
  templateUrl: './table17.component.html',
  styleUrls: ['./table17.component.scss']
})
export class Table17Component implements OnInit {
  city1: Array<IcityArr> = cityArr;
  constructor() { }

  ngOnInit(): void {
  }

}
