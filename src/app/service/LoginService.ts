import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../app.constants';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginService{
    constructor(private http: HttpClient, private router : Router){}

    login(user){
        return this.http.post(Constants.login, JSON.stringify(user)).subscribe(data =>{
            /*return body*/
            let token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
            localStorage.setItem("token", token);
            this.router.navigate(['home']); 
        },
        error => {
            alert('Acesso negado!');
        });
    }
}

