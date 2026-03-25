import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TabsPage implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  async ngOnInit() {
    await this.updateCartCount();

    // Escuchar cambios en el carrito
    this.cartService.reset$.subscribe(async () => {
      await this.updateCartCount();
    });
  }

  private async updateCartCount() {
    const cart = await this.cartService.getCart();
    this.cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}
