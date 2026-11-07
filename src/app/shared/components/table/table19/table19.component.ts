import { Component, OnInit } from '@angular/core';
import { memberArr } from 'src/app/shared/const/tabledata';
import { ImemberArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table19',
  templateUrl: './table19.component.html',
  styleUrls: ['./table19.component.scss']
})
export class Table19Component implements OnInit {
  members: Array<ImemberArr> = memberArr;
  constructor() { }

  ngOnInit(): void {
  }

}
