import { Component, OnInit } from '@angular/core';
import { gadgets, gadgetsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list24',
  templateUrl: './list24.component.html',
  styleUrls: ['./list24.component.scss']
})
export class List24Component implements OnInit {
  gadgetsText: string = gadgetsText;
  gadgets: string[] = gadgets;
  constructor() { }

  ngOnInit(): void {
  }

}
