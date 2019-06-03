import { 
    Component,Input,Output,Pipe,PipeTransform,OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Authentication} from '../services/authentication'
@Component({
  selector: 'dashboard',
  templateUrl: "./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  private prime;
  private user;
  constructor(private auth:Authentication,private route: Router){
   this.prime= this.generatePrime(Math.floor(Math.random()*100));
   debugger;
   this.user = this.auth.userInfo;
  }
  generatePrime(random){
    while(true){
      if(this.isPrime(random)){
         return random;
      }else{
        random++
      }
    }
    
  }
  isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
  logOut(){
    this.auth.logOutUser();
    this.route.navigate(['login'])
  }
}