import { Component, OnInit } from '@angular/core';
import { monuments, monumentsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list32',
  templateUrl: './list32.component.html',
  styleUrls: ['./list32.component.scss']
})
export class List32Component implements OnInit {
  monumentsText: string = monumentsText;
  monuments1: string[] = monuments;
  constructor() { }

  ngOnInit(): void {
  }

}
