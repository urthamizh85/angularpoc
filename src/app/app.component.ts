import { Component } from '@angular/core';
import {Authentication} from './services/authentication'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
   constructor(private auth : Authentication){
    this.auth.setAuth("Salman","Salman")
  }
}
