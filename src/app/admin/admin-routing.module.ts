import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddFoodCategoryComponent } from './add-food-category/add-food-category.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'add-restaurant', component: AddRestaurantComponent},
    { path: 'add-employee', component: AddEmployeeComponent},
    { path: 'add-food-category', component: AddFoodCategoryComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }