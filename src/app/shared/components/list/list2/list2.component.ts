import { Component, OnInit } from '@angular/core';
import { fruits, fruitsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {
  fruitsText = fruitsText;
  fruits = fruits;
  constructor() { }

  ngOnInit(): void {
  }

}
