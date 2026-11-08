import { Component, OnInit } from '@angular/core';
import { stationery, stationeryText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list33',
  templateUrl: './list33.component.html',
  styleUrls: ['./list33.component.scss']
})
export class List33Component implements OnInit {
  stationeryText: string = stationeryText;
  stationery1: string[] = stationery;
  constructor() { }

  ngOnInit(): void {
  }

}
