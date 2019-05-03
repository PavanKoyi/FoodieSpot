import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRoutingModule } from './user-routing.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    UserDashboardComponent
  ]
})
export class UserModule { }
