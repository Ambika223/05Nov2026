import { Component, OnInit } from '@angular/core';
import { gymArr } from 'src/app/shared/const/tabledata';
import { IgymArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table20',
  templateUrl: './table20.component.html',
  styleUrls: ['./table20.component.scss']
})
export class Table20Component implements OnInit {
  gyms: Array<IgymArr> = gymArr;
  constructor() { }

  ngOnInit(): void {
  }

}
