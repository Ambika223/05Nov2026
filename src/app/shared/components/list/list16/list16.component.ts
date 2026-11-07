import { Component, OnInit } from '@angular/core';
import { mobileBrands, mobileBrandsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list16',
  templateUrl: './list16.component.html',
  styleUrls: ['./list16.component.scss']
})
export class List16Component implements OnInit {
  mobileBrandsText: string = mobileBrandsText;
  mobileBrands: string[] = mobileBrands;
  constructor() { }

  ngOnInit(): void {
  }

}
