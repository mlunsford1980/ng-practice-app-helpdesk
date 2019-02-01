import { Component } from '@angular/core';
import { AuthService } from '../shared/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  signIn(credentials) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.authService.login(credentials).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate([returnUrl || '/']);
      } else {
        this.invalidLogin = true;
      }
    });
  }
}
