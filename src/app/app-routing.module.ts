import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './core/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: 'kids', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'kids', loadChildren: 'app/kids/kids.module#KidsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
