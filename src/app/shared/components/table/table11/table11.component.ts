import { Component, OnInit } from '@angular/core';
import { hotelArr } from 'src/app/shared/const/tabledata';
import { IhotelArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table11',
  templateUrl: './table11.component.html',
  styleUrls: ['./table11.component.scss']
})
export class Table11Component implements OnInit {
  hotelArr: Array<IhotelArr> = hotelArr;
  constructor() { }

  ngOnInit(): void {
  }

}
