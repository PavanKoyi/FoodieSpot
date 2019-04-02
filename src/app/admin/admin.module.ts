import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddFoodCategoryComponent } from './add-food-category/add-food-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [DashboardComponent,
      AddRestaurantComponent,
      AddEmployeeComponent, 
      AddFoodCategoryComponent, 
      UserListComponent
      ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminModule { }
