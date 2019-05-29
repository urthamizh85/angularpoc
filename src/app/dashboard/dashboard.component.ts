import { 
    Component,Input,Output,Pipe,PipeTransform,OnInit
} from '@angular/core';
@Component({
  selector: 'dashboard',
  template: `
   login user is : {{user}} <br>
   Prime Number : {{prime}}
` 
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