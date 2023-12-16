import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarketplaceType } from '../../types/marketplace.type';
import {
  NgFor, NgIf, UpperCasePipe,
} from '@angular/common';
import { Subscription, interval, timer } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-marketplace-item-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
  UpperCasePipe
  ],
  templateUrl: './marketplace-item-list.component.html',
  styleUrl: './marketplace-item-list.component.css'
})
export class MarketplaceItemListComponent implements OnInit, OnDestroy {

  productSub?: Subscription;
  marketPlaceItems: MarketplaceType[] = [];

  constructor(
    public productsService: ProductService,
    public cartService: CartService,
  ){}


  ngOnInit(): void {

    this.productSub = this.productsService.getProducts().subscribe(product => {
      this.marketPlaceItems = product;
    })

  }

  addToCart = (item: MarketplaceType) => {
    this.productsService.markProductAsSelected(item);
    this.cartService.addItems(item);
  }

  removeFromCart = (item: MarketplaceType) => {
    this.productsService.markProductAsUnselected(item);
    this.cartService.removeItem(item);
  }


  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

}

