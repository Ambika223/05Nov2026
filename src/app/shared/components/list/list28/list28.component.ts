import { Component, OnInit } from '@angular/core';
import { webTech, webTechText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list28',
  templateUrl: './list28.component.html',
  styleUrls: ['./list28.component.scss']
})
export class List28Component implements OnInit {
  webTechText: string = webTechText;
  webTech1: string[] = webTech;
  constructor() { }

  ngOnInit(): void {
  }

}
