import { Component, OnInit } from '@angular/core';
import { mobileArr } from 'src/app/shared/const/tabledata';
import { ImobileArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table18',
  templateUrl: './table18.component.html',
  styleUrls: ['./table18.component.scss']
})
export class Table18Component implements OnInit {
  mobiles: Array<ImobileArr> = mobileArr;
  constructor() { }

  ngOnInit(): void {
  }

}
