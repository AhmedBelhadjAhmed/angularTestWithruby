import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   public login : Login
   confirm! : any
   constructor(){
    this.login = new Login()
   }

   onSbmit(f:NgForm){
      console.log(this.login)
   }

}
