import { CurrencyPipe, getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import ICartItem from 'src/app/data/cart-item';
import IProduct from 'src/app/data/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(public cartService:CartService) { }


  cartItems: ICartItem[]=[]

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }
  deleteItem(product:IProduct){
    this.cartService.deleteItem(product)  
  }

  applyDiscount() {
    this.cartService.applyDiscount(20);
  }

  checkout() {
    const checkoutItems = this.cartItems.map(item => {
      return {
        product: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      };
    });
  
    const totalPrice = this.cartService.total.toFixed(2);
  
    let message = `Products:\n`;
  
    checkoutItems.forEach(item => {
      message += `${item.product} - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}\n`;
    });
  
    message += `\nTotal Price: $${totalPrice}`;
  
    alert(message);
  }
}
  
  
  
  

