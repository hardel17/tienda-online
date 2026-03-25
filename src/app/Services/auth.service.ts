import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Preferences } from '@capacitor/preferences';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // URL correcta de tu backend
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Registro
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Login
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // Guardar token
  async saveToken(token: string) {
    await Preferences.set({ key: 'token', value: token });
  }

  // Obtener token
  async getToken() {
    const { value } = await Preferences.get({ key: 'token' });
    return value;
  }

  // Eliminar token (logout)
  async logout() {
    await Preferences.remove({ key: 'token' });
  }
}
