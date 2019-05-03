import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-food-category',
  templateUrl: './add-food-category.component.html',
  styleUrls: ['./add-food-category.component.css']
})
export class AddFoodCategoryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any ) { }

  details: any;

  ngOnInit() {
    this.details = this.data;
  }

}
