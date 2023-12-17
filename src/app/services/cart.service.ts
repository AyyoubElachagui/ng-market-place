import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MarketplaceType } from '../types/marketplace.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartItems = new BehaviorSubject<Array<{ item: MarketplaceType, quantity: number }>>([]);

  constructor(
  ) { }


  getCartItems = () => this._cartItems;

  addItems = (item: MarketplaceType, quantity: number = 1) => {
    const currentCartItems = this._cartItems.getValue();
    const searchItem = currentCartItems.find((e) => e.item.id === item.id);
    if (searchItem) {
      searchItem.quantity += quantity;
    } else {
      currentCartItems.push({
        item,
        quantity
      });
    }
    this._cartItems.next(currentCartItems);
  }

  removeItem = (item: MarketplaceType) => {
    let currentCartItems = this._cartItems.getValue();
    currentCartItems = currentCartItems.filter((e) => e.item.id !== item.id);
    this._cartItems.next(currentCartItems);
  }


}
