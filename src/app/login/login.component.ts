import  { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/LoginService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    user = {login: '', pass: ''};

  constructor(private loginService: LoginService, private router: Router){}
    ngOnInit(): void {
      if(localStorage.getItem('token') !== null && 
        localStorage.getItem('token').toString().trim() !== null){
          this.router.navigate(['home']);
      }
    }

  public login(){
    this.loginService.login(this.user);
  }

  public recovery(){
    this.loginService.accountRecovery(this.user.login);
  }
}