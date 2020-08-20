import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/UserService';
import { Telephone } from 'src/app/model/telephone';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user = new User();
  telephone = new Telephone();
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

  deleteTelephone(id, i){

    if(id == null){
      this.user.phones.splice(i, 1);
      return;
    }

    if(id !== null && confirm("Are you sure?")){
      this.userService.deleteTelephone(id).subscribe(data => {
      this.user.phones.splice(i, 1);
      });
    }
  }

  addTelephone(){
    if(this.user.phones === undefined){
      this.user.phones = new Array<Telephone>();
    }
    this.user.phones.push(this.telephone);
    this.telephone = new Telephone();
  }

  newUser(){
    this.user = new User();
    this.telephone = new Telephone();
  }

}
