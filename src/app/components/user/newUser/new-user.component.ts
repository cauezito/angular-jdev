import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/UserService';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user = new User();

  constructor(private routeActive : ActivatedRoute, private userService : UserService) { }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if(id != null){
      this.userService.getUser(id).subscribe(data => {
        this.user = data;
      });
    }     
  }
  saveUser(){
    if(this.user.id != null && this.user.id.toString().trim() != null){ //update
      this.userService.updateUser(this.user).subscribe(data => {
       
      });
    } 
    else { //save
      this.userService.saveUser(this.user).subscribe(data => {
      });
    }
    this.newUser();
  }

  newUser(){
    this.user = new User();
  }

}
