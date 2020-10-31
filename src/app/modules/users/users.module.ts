import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users/users.component';
import { UsersCardModule } from '../../shared/modules/users-card/users-card.module';
import { SpinnerModule } from '../../shared/modules/spinner/spinner.module';


@NgModule({
  declarations: [UsersComponent],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersCardModule,
    SpinnerModule
  ]
})
export class UsersModule { }
