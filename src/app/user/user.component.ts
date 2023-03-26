import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  faAdjust } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 name = "Ahmed"
 location = "Tunisia"
 message: any
 tab = [ {nom: "ahmed" , code : 123 , country:"tunisia"},
         {nom: "amine" , code : 234 , country:"france"},
         {nom: "saleh" , code : 345 , country:"egypt"}
       ]
 constructor(private router:Router){}
 ngOnInit(): void {

  }

  getLocation(){
    return this.location;
  }
  getMessage(){
   console.log( "Please enter your data")
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }
}
