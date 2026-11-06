import { Component, OnInit } from '@angular/core';
import { studentArr } from 'src/app/shared/const/tabledata';
import { IstudentArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {
  studentArrs: IstudentArr[] = studentArr;
  constructor() { }

  ngOnInit(): void {
  }

}
