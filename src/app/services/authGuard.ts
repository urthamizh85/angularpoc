import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Authentication } from './authentication'
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private auth: Authentication) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}