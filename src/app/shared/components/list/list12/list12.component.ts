import { Component, OnInit } from '@angular/core';
import { birds, birdsText as birdsTextData } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list12',
  templateUrl: './list12.component.html',
  styleUrls: ['./list12.component.scss']
})
export class List12Component implements OnInit {
  birdsText: string = birdsTextData;
  birds: string[] = birds;

  constructor() { }

  ngOnInit(): void {
  }

}
