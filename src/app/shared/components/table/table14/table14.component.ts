import { Component, OnInit } from '@angular/core';
import { accountArr } from 'src/app/shared/const/tabledata';
import { IaccountArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table14',
  templateUrl: './table14.component.html',
  styleUrls: ['./table14.component.scss']
})
export class Table14Component implements OnInit {
  accountArr: Array<IaccountArr> = accountArr;
  constructor() { }

  ngOnInit(): void {
  }

}
