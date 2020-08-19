import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../app.constants';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    constructor(private http: HttpClient){}
    
    getUsers() : Observable<any>{
        return this.http.get<any>(Constants.url);
    }

    getUser(id) : Observable<any>{
        return this.http.get<any>(Constants.url + id);
    }

    deleteUser(id : Number) : Observable<any>{
        return this.http.delete(Constants.url + id, {responseType: 'text'});
    }

    findUserByName(name : String) : Observable<any>{
        return this.http.get(Constants.url + "find/" + name );        
    }

    saveUser(user) : Observable<any>{
        return this.http.post<any>(Constants.url, user);
    }

    updateUser(user) : Observable<any>{
        return this.http.put<any>(Constants.url, user);
    }

}