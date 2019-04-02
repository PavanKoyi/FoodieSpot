import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  addEmployeeForm: FormGroup;

  ngOnInit() {
    this.addEmployeeForm = new FormGroup({
      employeeName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      phoneNo: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      inputZip: new FormControl(null, [Validators.required])
    });
  }

}
