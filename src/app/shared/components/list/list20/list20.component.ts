import { Component, OnInit } from '@angular/core';
import { months, monthsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list20',
  templateUrl: './list20.component.html',
  styleUrls: ['./list20.component.scss']
})
export class List20Component implements OnInit {
  monthsText: string = monthsText;
  months: string[] = months;
  constructor() { }

  ngOnInit(): void {
  }

}
