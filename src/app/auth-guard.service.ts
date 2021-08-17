import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router:Router){}
  canActivate(activate:ActivatedRouteSnapshot,route:RouterStateSnapshot){
    if(this.isLoggedIn()){
      return true
    }
    this.router.navigate(["/login"])
    
  }
  isLoggedIn(){
    if(localStorage.getItem("status")=="true"){
      return true
    }
    else{
      return false
    }
  }

}
