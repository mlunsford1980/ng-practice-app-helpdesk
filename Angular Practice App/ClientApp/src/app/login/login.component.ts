import { Component } from '@angular/core';
import { AuthService } from '../shared/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin = false;

  constructor(private authService: AuthService, private router: Router) { }

  signIn(credentials) {
    if (this.authService.login(credentials)) {
      this.router.navigate(['/']);
    } else {
      this.invalidLogin = true;
    }
  }
}
