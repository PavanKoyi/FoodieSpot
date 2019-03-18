import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from './loginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private loginService: LoginService) { }

  loginForm: FormGroup;
  selected = 'option2';


  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSignup() {
    this.router.navigateByUrl('signup');
  }

  onLogin(): any {
    var users = [];
    this.loginService.login().subscribe(data => {
      users = data;
      users.forEach(user => {
        if (users.length > 0) {
          if (user.email === this.loginForm.value.username && user.password === this.loginForm.value.password) {
            console.log('LoggedIn successfully..... as' + user.role);
            console.log(user);
            this.router.navigateByUrl('admin');
          }
        }
      });

    });



  }

}
