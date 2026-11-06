import { Component, OnInit } from '@angular/core';
import { empArr } from 'src/app/shared/const/tabledata';
import { IempArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component implements OnInit {
  empArrs: Array<IempArr> = empArr;
  constructor() { }

  ngOnInit(): void {
  }

}
