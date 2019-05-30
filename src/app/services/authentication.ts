import { Injectable } from '@angular/core';

@Injectable()
export class Authentication {

  private username: string;
  private password: string;
  public userInfo: string;
  private isAuth: boolean = false;

  setAuth(user, pwd) {
    //this.username = user;
    //this.password = pwd
    //this.userInfo = user;
    localStorage.setItem("username",user)
    localStorage.setItem("password",pwd)
    localStorage.setItem("userInfo",user)
  }

  checkAuth(user, pwd) {
    if (user === localStorage.getItem("username") && pwd == localStorage.getItem("password")) {
      this.userInfo = localStorage.getItem("userInfo");
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
    localStorage.removeItem("userInfo");
    this.isAuth = false;
  }

}