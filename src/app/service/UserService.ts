import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    getUsersListPage(page): Observable<any>{
        return this.http.get<any>(Constants.url + 'page/ ' + page);
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

    findUserByNamePage(name : String, page : Number) : Observable<any>{
        return this.http.get(Constants.url + "find/" + name + "/page/" + page);        
    }

    saveUser(user) : Observable<any>{
        return this.http.post<any>(Constants.url, user);
    }

    updateUser(user) : Observable<any>{
        return this.http.put<any>(Constants.url, user);
    }

    deleteTelephone(id) : Observable<any>{
        return this.http.delete(Constants.url + "deleteTelephone/" +id, 
        {responseType: 'text'});
    }

    userAuth(){
        if(localStorage.getItem('token') !== null &&
        localStorage.getItem('token').toString().trim() !== null){
            return true;
        }
        return false;
    }

    getOccupationList() : Observable<any>{
        return this.http.get<any>(Constants.path+ 'occupation/');
    }

    downloadReportPdf(){
        return this.http.get(Constants.url + 'report', {responseType: 'text'}).
        subscribe(data => {
            document.querySelector('iframe').src = data;
        });
    }

}