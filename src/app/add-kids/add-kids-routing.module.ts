import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddKidsPageComponent } from './add-kids-page/add-kids-page.component';

const routes: Routes = [
  { path: '', component: AddKidsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddKidsRoutingModule { }
