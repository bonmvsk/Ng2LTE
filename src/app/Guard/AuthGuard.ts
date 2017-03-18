import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
    /**
     *
     */
    constructor(private router: Router) { }

    canActivate() {
        let IsActive: any = localStorage.getItem('isLoggedIn');
        if(IsActive){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}