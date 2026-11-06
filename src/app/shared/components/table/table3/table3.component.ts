import { Component, OnInit } from '@angular/core';
import { productArr } from 'src/app/shared/const/tabledata';
import { IproductArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss']
})
export class Table3Component implements OnInit {
  products: Array<IproductArr> = productArr;


  constructor() { }

  ngOnInit(): void {
  }

}
