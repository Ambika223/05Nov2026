import { coerceArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { courseArr } from 'src/app/shared/const/tabledata';
import { IcourseArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.scss']
})
export class Table4Component implements OnInit {
  courseArr: Array<IcourseArr> = courseArr
  constructor() { }

  ngOnInit(): void {
  }

}
