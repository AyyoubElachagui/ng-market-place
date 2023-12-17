import { Injectable } from '@angular/core';
import { MarketplaceType } from '../types/marketplace.type';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setItemIntoStorage = (item: MarketplaceType) => {
    let oldData = this.getItemsFromStorage();
    localStorage.setItem('cart', JSON.stringify([...oldData, item]))
  }

  getItemsFromStorage = (): MarketplaceType[] => {
    let data = localStorage.getItem('cart');
    if (data == null) {
      return [];
    }
    return JSON.parse(data);
  }

  getCountOfItemsInStorage = (): number => {
    let data = localStorage.getItem('cart');
    if (data == null) {
      return 0;
    }
    let _data = JSON.parse(data);
    return _data.length;
  }

  updateitemsInStorage = (updatedData: MarketplaceType[]): void => {
    localStorage.setItem('cart', JSON.stringify(updatedData));
  }

  deleteItemFromStorage = (itemId: number): void => {
    let currentData = this.getItemsFromStorage();
    let updatedData = currentData.filter(item => item.id !== itemId);
    this.updateitemsInStorage(updatedData);
  }

  clearDataInStorage = (): void => {
    localStorage.removeItem('cart');
  }

}
