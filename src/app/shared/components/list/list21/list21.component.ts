import { Component, OnInit } from '@angular/core';
import { planets, planetsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list21',
  templateUrl: './list21.component.html',
  styleUrls: ['./list21.component.scss']
})
export class List21Component implements OnInit {
  planetsText: string = planetsText;
  planets: string[] = planets;
  constructor() { }

  ngOnInit(): void {
  }

}
