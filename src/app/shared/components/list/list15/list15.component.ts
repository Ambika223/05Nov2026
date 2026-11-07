import { Component, OnInit } from '@angular/core';
import { rivers, riversText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list15',
  templateUrl: './list15.component.html',
  styleUrls: ['./list15.component.scss']
})
export class List15Component implements OnInit {
  riversText: string = riversText;
  rivers: string[] = rivers;
  constructor() { }

  ngOnInit(): void {
  }

}
