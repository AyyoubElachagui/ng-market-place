import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MarketplaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  countOfItems = 0
  
  countOfItemsInCart = (countOfItems: number) => {
    this.countOfItems = countOfItems;
  }

}
