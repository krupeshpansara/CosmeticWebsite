import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartCount = items.length; // Updates the cart count dynamically
    });
  }
  onCartClick() {
    console.log('Cart clicked!');
    // Add logic for navigating to the cart or displaying cart items
  }
}
