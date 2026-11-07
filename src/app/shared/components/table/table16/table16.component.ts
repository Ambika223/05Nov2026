import { Component, OnInit } from '@angular/core';
import { projectArr } from 'src/app/shared/const/tabledata';
import { IprojectArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table16',
  templateUrl: './table16.component.html',
  styleUrls: ['./table16.component.scss']
})
export class Table16Component implements OnInit {
  projects: Array<IprojectArr> = projectArr;
  constructor() { }

  ngOnInit(): void {
  }

}
