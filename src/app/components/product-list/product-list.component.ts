import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedCategory: string = '';
  searchTerm: string = '';
  categories: string[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products.map((ele) => {
        return {
          ...ele,
          imageUrl: 'https://via.placeholder.com/200x300?text=K',
        };
      });
      this.categories = [...new Set(products.map((p) => p.category))];
    });
  }

  get filteredProducts(): Product[] {
    return this.products
      .filter(
        (p) => !this.selectedCategory || p.category === this.selectedCategory
      )
      .filter(
        (p) =>
          !this.searchTerm ||
          p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          p.brand.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }

  addToCart(cart: any) {
    this.cartService.addToCart(cart);
  }
}
