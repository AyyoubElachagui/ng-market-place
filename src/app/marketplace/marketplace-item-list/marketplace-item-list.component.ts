import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MarketplaceType } from '../../types/marketplace.type';
import {
  NgFor, NgIf, UpperCasePipe,
} from '@angular/common';


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
export class MarketplaceItemListComponent {

  @Input()
  item?: MarketplaceType;

  @Output()
  onAddToCart: EventEmitter<MarketplaceType> = new EventEmitter<MarketplaceType>();

  @Output()
  onRemoveFromCart: EventEmitter<MarketplaceType> = new EventEmitter<MarketplaceType>();

  addToCart = (item?: MarketplaceType) => {
    this.onAddToCart.emit(item);
  }

  removeFromCart = (item?: MarketplaceType) => {
    this.onRemoveFromCart.emit(item);
  }

}

