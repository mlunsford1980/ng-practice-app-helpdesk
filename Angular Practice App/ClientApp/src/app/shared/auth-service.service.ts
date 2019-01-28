import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  login(credentials) {
    return this.http.post(`${this.baseUrl}api/auth/login`, credentials).subscribe((data: any) => {
      if (data && data.token) {
        localStorage.setItem('token', data.token);
        return true;
      } else {
        return false;
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired();
  }
}
