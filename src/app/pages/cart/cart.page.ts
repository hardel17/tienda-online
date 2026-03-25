import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CartPage implements OnInit {
  cart: any[] = [];
  total: number = 0;
  totalItems: number = 0;

  constructor(private cartService: CartService) {}

  async ngOnInit() {
    await this.loadCart();
  }

  async ionViewWillEnter() {
    await this.loadCart();
  }

  async clearCart() {
    await this.cartService.clearCart();
    this.cart = [];
    this.total = 0;
    this.totalItems = 0;
  }

  async increaseQuantity(product: any) {
    await this.cartService.addItem(product);
    await this.loadCart();
  }

  async decreaseQuantity(product: any) {
    await this.cartService.decreaseItem(product);
    await this.loadCart();
  }

  private async loadCart() {
    this.cart = await this.cartService.getCart();
    this.calculateTotals();
  }

  private calculateTotals() {
    this.total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  pagar() {
    console.log('Procesando pago...');
    // Aquí puedes integrar pasarela de pago o redirigir a otra página
  }
}
