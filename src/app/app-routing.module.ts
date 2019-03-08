import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: 'login', component: LoginComponent, children: [] },    
    { path: 'signup', component: SignUpComponent, children: [] }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
