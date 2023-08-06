import { Component, OnInit } from '@angular/core';
import ICartItem from 'src/app/data/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public cartService:CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
  }

  cartItems:ICartItem[]=[]
}
