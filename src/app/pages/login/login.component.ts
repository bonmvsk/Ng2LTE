import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/Services/login.service";
import { Router } from "@angular/router";
import { Login } from "app/Models/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fail: any = false;
  model: any = {};
  constructor(
    private _loginService: LoginService,
    private _router: Router
    ) { 
      
    }

  ngOnInit() {
    this.isLogout();
  }

  onLogin(){
    this._loginService.login(this.model.username, this.model.password).subscribe((res) => {
      if(res.success){
        localStorage.setItem('isLoggedIn', res.success);
        this._router.navigate(['/']);
      }else{
        this.fail = true;
      }
    });
  }

  isLogout(){
    let _login = new Login();
    _login.logout();
  }
}
