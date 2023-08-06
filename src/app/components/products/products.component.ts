import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProduct from 'src/app/data/product';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Products[] = [];

  constructor(private productService: ProductsService, private cartSerivce:CartService, private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getProducts()
  });
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product:IProduct){
    this.cartSerivce.addToCart(product)
  }

  

}
  
