import { Component, OnInit } from '@angular/core';
import { customerArr } from 'src/app/shared/const/tabledata';
import { IcustomerArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table6',
  templateUrl: './table6.component.html',
  styleUrls: ['./table6.component.scss']
})
export class Table6Component implements OnInit {

  constructor() { }
  customerArr: Array<IcustomerArr> = customerArr;
  ngOnInit(): void {
  }

}
