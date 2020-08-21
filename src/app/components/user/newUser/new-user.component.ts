import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/UserService';
import { Telephone } from 'src/app/model/telephone';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class FormatDate extends NgbDateParserFormatter{

  readonly DELIMITER = '/';
  parse(value: string): NgbDateStruct | null {
    if(value){
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }
  format(date: NgbDateStruct): string | null {
    return date ? this.formatDayAndMonth(date.day) + this.DELIMITER + 
    this.formatDayAndMonth(date.month) + this.DELIMITER + date.year : '';
  }

  formatDayAndMonth(value){
    if(value.toString !== '' && parseInt(value) <= 9){
      return '0'+value;
    }
    return value;
  }
  
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass: FormatDate}]
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
