import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Authentication} from '../services/authentication'

@Component({
  selector: 'app-login',
  templateUrl:"./login.component.html",
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private userName="";
  private password ="";
  private loginCount:number = 0;
  private incorrect:boolean = false;
  constructor(private route: Router,private auth:Authentication){
  }

  onsubmit(){
    
    if(this.auth.checkAuth(this.userName,this.password) ){
      this.route.navigate(["/dashboard"])
    }else{
      this.loginCount++;
      this.incorrect = true;      
    }
  }
  hideError(){
    this.incorrect = false;
  }

}
