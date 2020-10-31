import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ButtonModule } from '../../shared/modules/button/button.module';
import { UsersCardModule } from '../../shared/modules/users-card/users-card.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerModule } from '../../shared/modules/spinner/spinner.module';


@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    ButtonModule,
    UsersCardModule,
    FontAwesomeModule,
    SpinnerModule
  ]
})
export class UserProfileModule { }
