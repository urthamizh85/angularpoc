import { 
    Component,Input,Output,Pipe,PipeTransform,OnInit
} from '@angular/core';
@Component({
  selector: 'dashboard',
  templateUrl: "./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  private prime;
  private user;
  constructor(){
   this.prime= this.generatePrime(Math.floor(Math.random()*100))
   this.user = localStorage.getItem("user");
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
}