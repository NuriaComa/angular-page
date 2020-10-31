import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../shared/modules/button/button.module';
import { SpinnerModule } from '../../shared/modules/spinner/spinner.module';


@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SpinnerModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
