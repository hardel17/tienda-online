import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: any[] = [];
  private resetSubject = new BehaviorSubject<boolean>(false);

  reset$ = this.resetSubject.asObservable();

  async getCart() {
    return this.cart;
  }

  async addItem(product: any) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.resetSubject.next(true);
  }

  async removeItem(product: any) {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index > -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
    this.resetSubject.next(true);
  }

  // 👇 Nuevo método para disminuir cantidad sin eliminar directamente
  async decreaseItem(product: any) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        // si la cantidad es 1, lo eliminamos
        this.cart = this.cart.filter(p => p.id !== product.id);
      }
    }
    this.resetSubject.next(true);
  }

  async clearCart() {
    this.cart = [];
    this.resetSubject.next(true);
  }

  async updateCart(cart: any[]) {
    this.cart = cart;
    this.resetSubject.next(true);
  }
}

