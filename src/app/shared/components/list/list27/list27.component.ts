import { Component, OnInit } from '@angular/core';
import { instruments, instrumentsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list27',
  templateUrl: './list27.component.html',
  styleUrls: ['./list27.component.scss']
})
export class List27Component implements OnInit {
  instrumentsText: string = instrumentsText;
  instruments1: string[] = instruments;
  constructor() { }

  ngOnInit(): void {
  }

}
