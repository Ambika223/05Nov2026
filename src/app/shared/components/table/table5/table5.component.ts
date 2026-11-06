import { Component, OnInit } from '@angular/core';
import { bookArr } from 'src/app/shared/const/tabledata';
import { IbookArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table5',
  templateUrl: './table5.component.html',
  styleUrls: ['./table5.component.scss']
})
export class Table5Component implements OnInit {
  books: Array<IbookArr> = bookArr;
  constructor() { }

  ngOnInit(): void {
  }

}
