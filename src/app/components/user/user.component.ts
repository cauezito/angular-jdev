import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/UserService';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'  
})

export class UserComponent implements OnInit{

    users : Array<User[]>;
    name : String;
    total : Number;

    constructor(private userService : UserService){}

    ngOnInit(){
       this.userService.getUsers().subscribe(data => {
           this.users = data.content;
           this.total = data.totalElements;
       });
    }

    deleteUser(id: Number, index){
      if(confirm("Are you sure?")){
        this.userService.deleteUser(id).subscribe(data => {
          this.users.splice(index, 1);
        });
    }
    }

    findUserByName(){
     if(this.name !== undefined && this.name !== ""){
        this.userService.findUserByName(this.name).subscribe(data => {
          console.info(data.content);
          this.users = data.content;
          this.total = data.totalElements;
        });
   } else {
      this.userService.getUsers().subscribe(data => {
        this.users = data.content;
        this.total = data.totalElements;
    });
   }     
}

 loadPage(page){
   if(this.name !== ''){
    this.userService.findUserByNamePage(this.name, page - 1).subscribe(data => {
      this.users = data.content;
      this.total = data.totalElements;
    });
   } else {
    this.userService.getUsersListPage(page - 1).subscribe(data => {
      this.users = data.content;
      this.total = data.totalElements;
  }); 
  }
 }
}
