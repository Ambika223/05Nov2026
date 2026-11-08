import { Component, OnInit } from '@angular/core';
import { flowers, flowersText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list22',
  templateUrl: './list22.component.html',
  styleUrls: ['./list22.component.scss']
})
export class List22Component implements OnInit {
  flowersText: string = flowersText;
  flowers1: string[] = flowers;
  constructor() { }

  ngOnInit(): void {
  }

}
