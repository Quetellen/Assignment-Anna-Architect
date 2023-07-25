import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  @Output()
  userAuthenticated = new EventEmitter<boolean>();

  constructor(){

  }

  onValidate():void{
    console.log(`Email: ${ this.email }, Password: ${ this.password }`)

   
    this.userAuthenticated.emit(true);
  }

}
