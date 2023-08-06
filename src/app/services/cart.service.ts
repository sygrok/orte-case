import { CART_ITEMS } from './../data/cart-items';
import { Injectable } from '@angular/core';
import IProduct from '../data/product';
import ICartItem from '../data/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  total:number =0;

  constructor() { }

  getCart(){
    return CART_ITEMS;
  }
  discountApplied: boolean = false;

  addToCart(product:IProduct){
    let cartItem:ICartItem | undefined = CART_ITEMS.find(item => item.product.id == product.id)

    if(cartItem){
      cartItem.quantity++
    }else{
      CART_ITEMS.push({quantity:1,product:product})
    }
    this.cartTotal(product)

  }

  cartTotal(product:IProduct){
    this.total += product.price
  }

  deleteItem(product:IProduct){
    let cartItem:ICartItem | undefined = CART_ITEMS.find(item => item.product.id == product.id)

    if(cartItem){
      if(cartItem.quantity>1){
        cartItem.quantity--;
        this.total -= cartItem.product.price
      }else{
        CART_ITEMS.splice(CART_ITEMS.indexOf(cartItem),1)
        this.total -= cartItem.product.price
      }
    }
  }
  

  applyDiscount(discountPercentage: number) {
    const discountAmount = this.total * (discountPercentage / 100);
    this.total -= discountAmount;
  
    let totalItemPrice = 0;
    CART_ITEMS.forEach((item) => {
      totalItemPrice += item.product.price * item.quantity;
    });
  
    CART_ITEMS.forEach((item) => {
      const itemPrice = item.product.price * item.quantity;
      const itemDiscount = (itemPrice / totalItemPrice) * discountAmount;
      item.product.price -= itemDiscount / item.quantity;
    });
  
    this.discountApplied = true;
  }
}

  







