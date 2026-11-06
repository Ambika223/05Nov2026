import { Component, OnInit } from '@angular/core';
import { products, productsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component implements OnInit {
  productsText: string = productsText;
  products: string[] = products;
  constructor() { }

  ngOnInit(): void {
  }

}
