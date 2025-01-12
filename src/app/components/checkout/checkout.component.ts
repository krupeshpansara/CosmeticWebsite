import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  stripe: any;
  cardElement: any;

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.stripe = this.stripe('your_publishable_key');
    const elements = this.stripe.elements();
    this.cardElement = elements.create('card');
    this.cardElement.mount('#card-element');
  }

  async onSubmit() {
    if (this.checkoutForm.valid) {
      const { token, error } = await this.stripe.createToken(this.cardElement);
      if (error) {
        console.error(error);
      } else {
        // Send token to your backend
        console.log(token);
        // Clear cart after successful payment
        this.cartService.clearCart();
      }
    }
  }
}
