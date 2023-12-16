import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarketplaceType } from '../types/marketplace.type';
import { Subscribable, Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  cartItems: {item: MarketplaceType, quantity: number} [] = [];
  cartItemSub?: Subscription;

  constructor(
    public cartService: CartService,
  ){}

  ngOnDestroy(): void {
    this.cartItemSub = this.cartService.getCartItems().subscribe((cart) => {
      console.log("done");
      this.cartItems = cart;
    })
  }

  ngOnInit(): void {
    this.cartItemSub?.unsubscribe();
  }



}
