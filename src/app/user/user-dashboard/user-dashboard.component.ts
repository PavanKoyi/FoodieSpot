import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  public items: any = [
    {id: 1, name:'Chicken Biryani', imageUrl: './../../../assets/chickenBiryani.jpg'},
    {id: 2, name:'Veg', imageUrl: './../../../assets/chickenBiryani.jpg'},
    {id: 3, name:'3333', imageUrl: './../../../assets/chickenBiryani.jpg'},
    {id: 4, name:'4444', imageUrl: './../../../assets/chickenBiryani.jpg'},
    {id: 5, name:'55555', imageUrl: './../../../assets/chickenBiryani.jpg'},
    {id: 6, name:'66666', imageUrl: './../../../assets/chickenBiryani.jpg'},
    {id: 7, name:'7777', imageUrl: './../../../assets/chickenBiryani.jpg'},
    {id: 8, name:'8888', imageUrl: './../../../assets/chickenBiryani.jpg' }
  ];

  ngOnInit() {
  }

}
