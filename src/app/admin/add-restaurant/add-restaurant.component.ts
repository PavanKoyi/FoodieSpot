import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor() { }

  addRestaurantForm: FormGroup;

  ngOnInit() {
    this.addRestaurantForm = new FormGroup( {
      restaurantName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      ownerId: new FormControl(null, [Validators.required]),
      phoneNo: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      inputZip: new FormControl(null, [Validators.required]),
    })
  }

}
