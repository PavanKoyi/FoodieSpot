import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddFoodCategoryComponent } from '../add-food-category/add-food-category.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router,
               private route: ActivatedRoute,
               private dialog: MatDialog) { }

  public userdata: any;

  owner: string = 'Koyipavan';
  palce: string = 'Guntur';

  ngOnInit() { }

  onSelectEntity(event: any){
    console.log(event, 'event');
    if(event.target.value == "Users") {
      this.router.navigate(['users'], {relativeTo: this.route });
    }
    
  }

  addFoodCategory() {
    console.log('Add Food Category clicked');
    const dialogRef = this.dialog.open(AddFoodCategoryComponent, {
      data: {owner: this.owner, place: this.palce}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });

  }

}
