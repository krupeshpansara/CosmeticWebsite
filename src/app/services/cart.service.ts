import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]); // Observable to track cart items
  cartItems$ = this.cartItemsSubject.asObservable(); // Public observable for cart items

  constructor() {}

  // Get current cart items
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Add item to cart
  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity += 1; // Update quantity if item exists
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems); // Notify subscribers
  }

  // Remove item from cart
  removeFromCart(item: CartItem): void {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    this.cartItemsSubject.next(this.cartItems); // Notify subscribers
  }

  // Clear all items from cart
  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems); // Notify subscribers
  }
}
