import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "app/pages/login/login.component";
import { AuthService } from "app/Services/Auth.service";
import { routing } from "app/pages/login/login.routing";
import { LoginService } from "app/Services/login.service";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthService,
    LoginService
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
