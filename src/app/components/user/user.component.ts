import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/UserService';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'  
})

export class UserComponent implements OnInit{

    users : Observable<User[]>;
    name : String;

    constructor(private userService : UserService){}

    ngOnInit(){
       this.userService.getUsers().subscribe(data => {
           this.users = data;
       });
    }

    deleteUser(id: Number){
      if(confirm("Are you sure?")){
        this.userService.deleteUser(id).subscribe(data => {
          this.userService.getUsers().subscribe(data => {
            this.users = data;
        });
        });
    }
    }

    findUserByName(){
      if(this.name !== undefined && this.name !== ""){
        this.userService.findUserByName(this.name).subscribe(data => {
          this.users = data;
        });
    }     
}
}