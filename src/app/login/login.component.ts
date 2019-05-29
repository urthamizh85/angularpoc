import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:"./login.component.html",
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private username="";
  private password ="";
  private loginCount:number = 0;
  private incorrect:boolean = false;
  constructor(private route: Router){
  }

  onsubmit(){
    
    if(this.username === localStorage.getItem("user") && this.password === localStorage.getItem("pwd") ){
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
