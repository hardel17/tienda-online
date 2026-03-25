import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async login() {
    if (!this.email || !this.password) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor ingresa correo y contraseña',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    try {
      const response: any = await this.authService.login({
        email: this.email,
        password: this.password,
      }).toPromise();

      if (response && response.token) {
        await this.authService.saveToken(response.token);

        const toast = await this.toastCtrl.create({
          message: 'Login exitoso',
          duration: 2000,
          color: 'success'
        });
        toast.present();

        // Redirige al home
        this.router.navigate(['/tabs']);
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Credenciales inválidas',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    } catch (error) {
      const toast = await this.toastCtrl.create({
        message: 'Error en login',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      console.error('Error en login:', error);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
