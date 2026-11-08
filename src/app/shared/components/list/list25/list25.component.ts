import { Component, OnInit } from '@angular/core';
import { weekdays, weekdaysText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list25',
  templateUrl: './list25.component.html',
  styleUrls: ['./list25.component.scss']
})
export class List25Component implements OnInit {
  weekdaysText: string = weekdaysText;
  weekdays1: string[] = weekdays;
  constructor() { }

  ngOnInit(): void {
  }

}
