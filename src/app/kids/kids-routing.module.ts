import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPageComponent } from './view-page/view-page.component';
import { AddPageComponent } from './add-page/add-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ViewPageComponent },
  { path: 'add', component: AddPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
