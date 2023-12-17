import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MarketplaceItemListComponent } from './marketplace-item-list/marketplace-item-list.component';
import { Subscription } from 'rxjs';
import { MarketplaceType } from '../types/marketplace.type';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { JsonPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [MarketplaceItemListComponent, NgFor, NgIf, KeyValuePipe, JsonPipe ],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent implements OnInit, OnDestroy{
  productSub?: Subscription;
  marketPlaceItems: MarketplaceType[] = [];
  cacheSubscription?: Subscription;
  data: any[] | undefined = [];

  constructor(
    public productsService: ProductService,
    public cartService: CartService,
    public localstorageService: LocalstorageService,
  ){}

  @Output()
  countItemsInCart: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
    this.productSub = this.productsService.getProducts().subscribe(product => {
      let storageItems = this.localstorageService.getItemsFromStorage();
      this.marketPlaceItems = product.map(e => {
        storageItems.map(si => {
          if(e.id === si.id){
            e.isSelected = true;
          }
        });
        return e;
      });
    })
    this.countItemsInCart.emit(this.localstorageService.getCountOfItemsInStorage());
  }

  addToCart = (item: MarketplaceType) => {
    this.productsService.markProductAsSelected(item);
    this.localstorageService.setItemIntoStorage(item);
    this.countItemsInCart.emit(this.localstorageService.getCountOfItemsInStorage()); 
  }

  removeFromCart = (item: MarketplaceType) => {
    this.productsService.markProductAsUnselected(item);
    this.localstorageService.deleteItemFromStorage(item.id);
    this.countItemsInCart.emit(this.localstorageService.getCountOfItemsInStorage());
  }


  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

}
