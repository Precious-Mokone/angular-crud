import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  list:any;

  constructor(private productsServ:ProductsService) { }

  ngOnInit(): void {
    this.productsServ.get_All_Products().subscribe(respond=>{
        console.log(respond);
        this.list = respond;
    });

  }

  getProduct(index:any){
    console.log(this.list[index]);
    localStorage.setItem("product", JSON.stringify(this.list[index]))
  }

}
