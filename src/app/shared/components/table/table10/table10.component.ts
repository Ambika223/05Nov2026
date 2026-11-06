import { Component, OnInit } from '@angular/core';
import { vehicleArr } from 'src/app/shared/const/tabledata';
import { IvehicleArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table10',
  templateUrl: './table10.component.html',
  styleUrls: ['./table10.component.scss']
})
export class Table10Component implements OnInit {
  vehicleArr: Array<IvehicleArr> = vehicleArr;
  constructor() { }

  ngOnInit(): void {
  }

}
