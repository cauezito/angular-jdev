import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../app.constants';
import { error } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root'
})

export class LoginService{
    constructor(private http: HttpClient){}

    login(user){
        return this.http.post(Constants.login, JSON.stringify(user)).subscribe(data =>{
            /*return body*/
            let token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
            localStorage.setItem("token", token);
        },
        error => {
            console.error("Dados inválidos!")
        });
    }
}

