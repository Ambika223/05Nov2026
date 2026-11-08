import { Component, OnInit } from '@angular/core';
import { states, statesText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list26',
  templateUrl: './list26.component.html',
  styleUrls: ['./list26.component.scss']
})
export class List26Component implements OnInit {
  statesText: string = statesText;
  states1: string[] = states;
  constructor() { }

  ngOnInit(): void {
  }

}
