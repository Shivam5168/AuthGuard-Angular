import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) => {
debugger
  const router :  Router = inject(Router);
 
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
  
  return username && password != null ?  true : (router.navigate(['/login']), false);
}

