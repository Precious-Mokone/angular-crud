import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product:any;
  temp:any;
  constructor() { }

  ngOnInit(): void {
    const loc_storage_prod = localStorage.getItem("product");
    this.product = loc_storage_prod && JSON.parse(loc_storage_prod);
    // console.log(product));
  }

}
