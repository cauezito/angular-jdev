import { Component } from '@angular/core';
import {LoginService } from './service/LoginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  user = {login: '', pass: ''};

  constructor(private loginService: LoginService){}

  public login(){
    this.loginService.login(this.user);
  }

}
