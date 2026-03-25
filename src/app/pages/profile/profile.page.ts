import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { jwtDecode } from 'jwt-decode';
;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ProfilePage implements OnInit {
  user = {
    name: '',
    email: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  async ngOnInit() {
    const token = await this.authService.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      this.user.name = decoded.name;
      this.user.email = decoded.email;
    }
  }

  async logout() {
    // limpiar token guardado
    await this.authService.logout();
    // Redirigir al login
    this.router.navigate(['/login']);
  }
}
