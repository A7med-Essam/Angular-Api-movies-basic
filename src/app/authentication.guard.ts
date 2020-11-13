import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(public _SignUpService: SignUpService , public _Router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._SignUpService.userToken.getValue() != null) {
      return true;
    }
    else {
      this._Router.navigate(['/login'])
      return false;
    }
  }


}




