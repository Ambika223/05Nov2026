import { Component, OnInit } from '@angular/core';
import { sports, sportsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list8',
  templateUrl: './list8.component.html',
  styleUrls: ['./list8.component.scss']
})
export class List8Component implements OnInit {
  sportsText: string = sportsText;
  sports: string[] = sports;
  constructor() { }

  ngOnInit(): void {
  }

}
