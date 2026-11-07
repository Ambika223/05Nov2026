import { Component, OnInit } from '@angular/core';
import { festivals, festivalsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list14',
  templateUrl: './list14.component.html',
  styleUrls: ['./list14.component.scss']
})
export class List14Component implements OnInit {
  festivalsText: string = festivalsText;
  festivals: string[] = festivals;
  constructor() { }

  ngOnInit(): void {
  }

}
