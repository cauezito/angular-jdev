import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/UserService';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { UserReport } from 'src/app/model/UserReport';

@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string>{

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
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
  toModel(date: NgbDateStruct | null) : string | null {
    return date ? date.day + this.DELIMITER + 
    date.month + this.DELIMITER + date.year : null;
  }

}

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

  toModel(date : NgbDateStruct | null) : string | null{
    return date ? date.day + this.DELIMITER + 
    date.month + this.DELIMITER + date.year : null;
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
  templateUrl: './userReport.component.html',
  styleUrls: ['./userReport.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass: FormatDate},
  {provide: NgbDateAdapter, useClass: FormatDateAdapter}]
})
export class UserReportComponent {

  userReport = new UserReport();

  constructor(private routeActive : ActivatedRoute, private userService : UserService) { }

  printReport(){
    console.log('1')
  }

}
