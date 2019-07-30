import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouterModule, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
    // throw new Error("Method not implemented.");
  }
}
