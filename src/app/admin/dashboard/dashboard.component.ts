import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router,
               private route: ActivatedRoute) { }

  public userdata: any;

  ngOnInit() { }

  onSelectEntity(event: any){
    console.log(event, 'event');
    if(event.target.value == "Users") {
      this.router.navigate(['users'], {relativeTo: this.route });
    }
    
  }

}
