import  { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/LoginService';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    user = {login: '', pass: ''};

  constructor(private loginService: LoginService){}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  public login(){
    this.loginService.login(this.user);
  }
}