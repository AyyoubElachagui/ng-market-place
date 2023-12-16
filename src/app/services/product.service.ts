import { Injectable } from '@angular/core';
import { MarketplaceType } from '../types/marketplace.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: MarketplaceType[] = [
    {
      id: 1,
      title: 'Hello world 1',
      category: 'ADULT',
      image: 'https://via.placeholder.com/500',
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text ",
      price: 12
    },
    {
      id: 2,
      title: 'Hello world 2',
      category: 'ADULT',
      image: 'https://via.placeholder.com/500',
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text ",
      price: 190
    },
    {
      id: 3,
      title: 'Hello world 3',
      category: 'ADULT',
      image: 'https://via.placeholder.com/500',
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text ",
      price: 223
    },
  ];

  constructor() { }

  getProducts = (): Observable<Array<MarketplaceType>> => {
    return of(this._products);
  }

  markProductAsSelected = (item: MarketplaceType) => {
    item.isSelected = true;
  }

  markProductAsUnselected = (item: MarketplaceType) => {
    item.isSelected = false;
  }

}
