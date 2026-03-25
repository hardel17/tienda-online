import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async register() {
    if (!this.name || !this.email || !this.password) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor completa todos los campos',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    try {
      const response: any = await this.authService.register({
        name: this.name,
        email: this.email,
        password: this.password,
      }).toPromise();

      if (response && response.token) {
        await this.authService.saveToken(response.token);

        const toast = await this.toastCtrl.create({
          message: 'Registro exitoso, ahora inicia sesión',
          duration: 2000,
          color: 'success'
        });
        toast.present();

        this.router.navigate(['/login']);
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Error en el registro',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    } catch (error) {
      const toast = await this.toastCtrl.create({
        message: 'Error en registro',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      console.error(error);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
