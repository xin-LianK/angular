import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    // Set our navigation extras object
    // that passes on our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };


    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
