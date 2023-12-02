import { Component } from '@angular/core';
import { MarketplaceType } from '../../types/marketplace.type';
import {
  NgFor, UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-marketplace-item-list',
  standalone: true,
  imports: [
    NgFor,
  UpperCasePipe
  ],
  templateUrl: './marketplace-item-list.component.html',
  styleUrl: './marketplace-item-list.component.css'
})
export class MarketplaceItemListComponent {

  public marketplaceItems: MarketplaceType[] = [
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
  ]

}
