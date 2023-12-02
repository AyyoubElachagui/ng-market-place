import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarketplaceType } from '../../types/marketplace.type';
import {
  NgFor, UpperCasePipe,
} from '@angular/common';
import { Subscription, interval } from 'rxjs';


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
export class MarketplaceItemListComponent /*implements OnInit, OnDestroy*/ {

  public seconds: number = 0;
  // counterSubscription: Subscription | undefined;
  // ngOnInit(): void {
  //   const counter = interval(1000);
  //   this.counterSubscription = counter.subscribe({
  //     next: (value) => {this.seconds = value},
  //     error: (error: any) => {console.log("Oops, Error est survenu", error)},
  //     complete: () => {console.log("Observable est termine")},
  //   }
  //   )
  // }

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

  

  // ngOnDestroy(): void {
  //   this.counterSubscription?.unsubscribe();
  // }

}
