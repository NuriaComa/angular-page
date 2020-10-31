import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCardComponent } from './users-card/users-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersCardComponent],
  exports: [
    UsersCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersCardModule { }
