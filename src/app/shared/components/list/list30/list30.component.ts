import { Component, OnInit } from '@angular/core';
import { household, householdText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list30',
  templateUrl: './list30.component.html',
  styleUrls: ['./list30.component.scss']
})
export class List30Component implements OnInit {
  householdText: string = householdText;
  households: string[] = household;
  constructor() { }

  ngOnInit(): void {
  }

}
