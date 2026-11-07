import { Component, OnInit } from '@angular/core';
import { flightArr } from 'src/app/shared/const/tabledata';
import { IflightArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table15',
  templateUrl: './table15.component.html',
  styleUrls: ['./table15.component.scss']
})
export class Table15Component implements OnInit {
  flights: Array<IflightArr> = flightArr;
  constructor() { }

  ngOnInit(): void {
  }

}
