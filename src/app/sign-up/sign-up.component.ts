import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  signupForm:  FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup( {
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required,Validators.minLength(10), Validators.maxLength(12)]),
      password: new FormControl(null, [Validators.required]),
      address: new FormGroup( {
        street: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
      })
    }); 
  }

  onSignup() {
    console.log(this.signupForm.value);
  }

  onLogin() {
    this.router.navigateByUrl('login');
  }
}
