import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/user-profile/user-profile.module')
      .then(mod => mod.UserProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
