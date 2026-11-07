import { Component, OnInit } from '@angular/core';
import { vegetables, vegetablesText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list11',
  templateUrl: './list11.component.html',
  styleUrls: ['./list11.component.scss']
})
export class List11Component implements OnInit {
  vegetablesText: string = vegetablesText;
  vegetables: string[] = vegetables;
  constructor() { }

  ngOnInit(): void {
  }

}
