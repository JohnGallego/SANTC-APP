import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'view-kids', loadChildren: 'app/view-kids/view-kids.module#ViewKidsModule' },
  { path: '',   redirectTo: '/view-kids', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
