import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/loginService.service';
import {  HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthenticationServiceService } from './login/authentication-service.service';
import { DemoHeadComponent } from './head/demo-head/demo-head.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    DemoHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    LoginService,
    AuthenticationServiceService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
