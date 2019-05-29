import { Injectable } from '@angular/core';

@Injectable()
export class Authentication {

  private username: string;
  private password: string;
  private userInfo: string;
  private isAuth: boolean = false;

  setAuth(user, pwd) {
    this.username = user;
    this.password = pwd
    this.userInfo = user;
  }

  checkAuth(user, pwd) {
    if (user === this.username && pwd == this.password) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    return this.isAuth;
  }
  isAuthenticated() {
    return this.isAuth;
  }
  logOutUser() {
    this.userInfo = "";
    this.isAuth = false;
  }

}