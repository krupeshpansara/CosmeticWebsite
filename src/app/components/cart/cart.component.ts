import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartHeader: any = {
    items: { title: 'Items' },
    price: { title: 'Price' },
    qty: { title: 'qty' },
    Total: { title: 'Total' },
  };
  cartArray = Array.from({ length: 5 }, (_, index) => index + 1);
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const footerElement = document.getElementById('main_footer');
    if (footerElement) {
      this.renderer.setStyle(footerElement, 'display', 'none');
    }
  }
}
