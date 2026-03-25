import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { CartService } from '../../Services/cart.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ProductsPage implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService, private cartService: CartService) {}

  async ngOnInit() {
    // Consumimos el servicio con token
    const products$ = await this.apiService.getProducts();
    products$.subscribe({
      next: async (data: any) => {
        this.products = data;
        await this.syncCounters();
      },
      error: (err) => {
        console.error('Error cargando productos', err);
      }
    });

    // Escucha cuando se reinicia el carrito
    this.cartService.reset$.subscribe(async () => {
      await this.syncCounters();
    });
  }

  async addToCart(product: any) {
    await this.cartService.addItem(product);
    await this.syncCounters();
  }

  private async syncCounters() {
    const cart = await this.cartService.getCart();
    this.products.forEach(p => {
      const item = cart.find(c => c.id === p.id);
      p.count = item ? item.quantity : 0;
    });
  }
}
