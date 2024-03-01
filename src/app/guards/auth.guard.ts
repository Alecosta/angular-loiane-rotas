import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): boolean |  Observable<boolean>{

    console.log('AuthGuard');

    return this.verificarAcesso();

  }

  private verificarAcesso(){

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    } 
    this.router.navigate(['/login']);
    return false;
  }
  canLoad(route: Route): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  console.log('AuthGuard canLoad: verificando se o usuario pode carregar o cod. do modulo');

    return this.verificarAcesso();
  }
}
