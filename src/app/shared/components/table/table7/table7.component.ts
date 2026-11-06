import { Component, OnInit } from '@angular/core';
import { orderArr } from 'src/app/shared/const/tabledata';
import { IorderArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table7',
  templateUrl: './table7.component.html',
  styleUrls: ['./table7.component.scss']
})
export class Table7Component implements OnInit {

  constructor() { }
  orderArr: Array<IorderArr> = orderArr;
  ngOnInit(): void {
  }

}
