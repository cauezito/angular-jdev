import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Usuários';

  constructor(private router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem('token') == null){
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home']);
    }
  }

  public logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }


 

 

}
