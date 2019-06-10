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
  private primeNo;
  private userName;
  constructor(private auth:Authentication,private route: Router){
   this.primeNo= this.generatePrime(Math.floor(Math.random()*100));
   this.userName = this.auth.userInfo;
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