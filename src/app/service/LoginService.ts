import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../app.constants';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable({
    providedIn: 'root'
})

export class LoginService{
    constructor(private http: HttpClient, private router : Router){}

    accountRecovery(login){
        let user = new User();
        user.login = login;

        return this.http.post(Constants.path + 'recovery/' , user).subscribe(data =>{
           alert(JSON.parse(JSON.stringify(data)).error);
        },
        error => {
            alert('Acesso negado!');
        });
    }



    login(user){
        return this.http.post(Constants.login, JSON.stringify(user)).subscribe(data =>{
            /*return body*/
            var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
            localStorage.setItem("token", token);
            this.router.navigate(['home']); 
        },
        error => {
            alert('Acesso negado!');
        });
    }

}

