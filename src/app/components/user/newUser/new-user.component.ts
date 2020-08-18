import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private routeActive : ActivatedRoute) { }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');
    if(id !== null){
      console.log("id! " + id);
    } else {
      console.log("s/ id");
    }
  }

}
