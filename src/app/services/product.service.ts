import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Natural Glow Foundation',
      description: 'A lightweight foundation for natural coverage',
      price: 29.99,
      imageUrl: 'assets/images/foundation.jpg',
      category: 'Makeup',
      brand: 'GlowBeauty',
      stock: 50,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Hydrating Face Cream',
      description: '24-hour moisturizing cream',
      price: 34.99,
      imageUrl: 'assets/images/cream.jpg',
      category: 'Skincare',
      brand: 'PureSkin',
      stock: 45,
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Volumizing Mascara',
      description: 'Long-lasting volumizing mascara',
      price: 19.99,
      imageUrl: 'assets/images/mascara.jpg',
      category: 'Makeup',
      brand: 'LashPro',
      stock: 60,
      rating: 4.3,
    },
    {
      id: 4,
      name: 'Rose Water Toner',
      description: 'Natural rose water toner for all skin types',
      price: 15.99,
      imageUrl: 'assets/images/toner.jpg',
      category: 'Skincare',
      brand: 'PureSkin',
      stock: 70,
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Matte Lipstick',
      description: 'Long-lasting matte finish lipstick',
      price: 24.99,
      imageUrl: 'assets/images/lipstick.jpg',
      category: 'Makeup',
      brand: 'ColorPop',
      stock: 55,
      rating: 4.4,
    },
    {
      id: 6,
      name: 'Vitamin C Serum',
      description: 'Brightening vitamin C serum',
      price: 39.99,
      imageUrl: 'assets/images/serum.jpg',
      category: 'Skincare',
      brand: 'GlowBeauty',
      stock: 40,
      rating: 4.7,
    },
  ];

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<Product[]> {
    // For now, return mock data
    // When you have an API, replace with:
    // return this.http.get<Product[]>('your-api-url/products');
    return of(this.products);
  }

  // Get single product by ID
  getProduct(id: number): Observable<Product | undefined> {
    // For now, return mock data
    // When you have an API, replace with:
    // return this.http.get<Product>(`your-api-url/products/${id}`);
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }

  // Get products by category
  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(
      (p) => p.category === category
    );
    return of(filteredProducts);
  }

  // Search products
  searchProducts(term: string): Observable<Product[]> {
    const searchResults = this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(term.toLowerCase()) ||
        p.description.toLowerCase().includes(term.toLowerCase()) ||
        p.brand.toLowerCase().includes(term.toLowerCase())
    );
    return of(searchResults);
  }

  // Get all categories
  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.products.map((p) => p.category))];
    return of(categories);
  }

  // Get products by brand
  getProductsByBrand(brand: string): Observable<Product[]> {
    const filteredProducts = this.products.filter((p) => p.brand === brand);
    return of(filteredProducts);
  }
}
