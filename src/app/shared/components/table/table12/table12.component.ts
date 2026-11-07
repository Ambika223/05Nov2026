import { Component, OnInit } from '@angular/core';
import { doctorArr } from 'src/app/shared/const/tabledata';
import { IdoctorArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table12',
  templateUrl: './table12.component.html',
  styleUrls: ['./table12.component.scss']
})
export class Table12Component implements OnInit {
  doctorsArr: Array<IdoctorArr> = doctorArr;
  constructor() { }

  ngOnInit(): void {
  }

}
