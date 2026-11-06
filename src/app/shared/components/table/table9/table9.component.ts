import { Component, OnInit } from '@angular/core';
import { teacherArr } from 'src/app/shared/const/tabledata';
import { IteacherArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table9',
  templateUrl: './table9.component.html',
  styleUrls: ['./table9.component.scss']
})
export class Table9Component implements OnInit {

  constructor() { }
  teacherArr: Array<IteacherArr> = teacherArr;
  ngOnInit(): void {
  }

}
