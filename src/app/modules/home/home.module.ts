import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UsersModule } from '../users/users.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { SpinnerModule } from '../../shared/modules/spinner/spinner.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UsersModule,
    SearchBarModule,
    SpinnerModule
  ]
})
export class HomeModule { }
