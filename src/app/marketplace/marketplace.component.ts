import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MarketplaceItemListComponent } from './marketplace-item-list/marketplace-item-list.component';
import { Subscription } from 'rxjs';
import { MarketplaceType } from '../types/marketplace.type';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { NgFor } from '@angular/common';
import { stringify } from 'querystring';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [MarketplaceItemListComponent, NgFor,],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent implements OnInit, OnDestroy{
  productSub?: Subscription;
  marketPlaceItems: MarketplaceType[] = [];

  constructor(
    public productsService: ProductService,
    public cartService: CartService,
  ){}

  @Output()
  countItemsInCart: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
    this.productSub = this.productsService.getProducts().subscribe(product => {
      this.marketPlaceItems = product;
    })
  }

  addToCart = (item: MarketplaceType) => {
    this.productsService.markProductAsSelected(item);
    this.cartService.addItems(item);
    this.countItemsInCart.emit(this.cartService.getCartItems().value.length); 
  }

  removeFromCart = (item: MarketplaceType) => {
    this.productsService.markProductAsUnselected(item);
    this.cartService.removeItem(item);
    this.countItemsInCart.emit(this.cartService.getCartItems().value.length);
  }


  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

}
