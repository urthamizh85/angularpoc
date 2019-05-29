import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
   constructor(){
    localStorage.setItem("user","tamil")
    localStorage.setItem("pwd","tamil")
  }
}
