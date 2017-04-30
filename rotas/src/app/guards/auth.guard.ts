
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {
  CanActivate
  , Router
  , ActivatedRouteSnapshot
  , RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './../login/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router

  ) {
    console.log("AuthGuard");
   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
    }
  }


}
