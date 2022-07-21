import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    const checked = localStorage.getItem('access_token');
    if (checked) {
      // logged in so return true
      return true;
    }

    localStorage.removeItem('access_token');
    this.router.navigate(['/auth/login']);
    return false;
  }
}
