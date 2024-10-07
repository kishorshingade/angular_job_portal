import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoggedIn: boolean = false;
  userInfo:any
  ki:any
  constructor(){
    const userData = sessionStorage.getItem('loginJobseeker')

  if(userData == null){
   this.isLoggedIn = false;
  }else{
    this.isLoggedIn = true
    this.userInfo = JSON.parse(userData)
  }
  }
  ngOnInit(): void {

  }
  logout(){
    if(confirm('Do you want to Log Out ?')){
      sessionStorage.removeItem('loginJobseeker')
      this.isLoggedIn = false
    }
  }
}
