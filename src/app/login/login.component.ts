import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  SAMPLE: Number;
   a = 20;

  loginForm: FormGroup;

  ngOnInit() { 
    this.loginForm = new FormGroup ({
      username : new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });
  }

  onSignup() {
    this.router.navigateByUrl('signup');
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.SAMPLE = 20;
    console.log(this)
  }

}
