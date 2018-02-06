import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewKidsComponent } from './view-kids/view-kids.component';

const routes: Routes = [
  { path: '',  component: ViewKidsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewKidsRoutingModule { }
