import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {Login} from '../login'
import { AuthGuardService } from '../auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private service:AuthGuardService) { }
  model= new Login()
  isLoggedin:boolean =false
  returnUrl="/userhome"
  ngOnInit(): void {
  }
  login(){
    console.log(this.model.username)
    console.log(this.model.password)
    if(this.model.username=="admin" && this.model.password=="admin"){
      console.log("sucessfully logged in")
      this.isLoggedin = true
      localStorage.setItem("status","true")
      // this.service.isLoggedIn()
      this.router.navigate([this.returnUrl])
    }
    else{
      console.log("invalid login")
      this.router.navigate(["/login"])
    }
  }


}
