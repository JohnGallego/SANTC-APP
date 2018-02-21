import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddKidsRoutingModule } from './add-kids-routing.module';
import { AddKidsPageComponent } from './add-kids-page/add-kids-page.component';

@NgModule({
  imports: [
    CommonModule,
    AddKidsRoutingModule
  ],
  declarations: [AddKidsPageComponent]
})
export class AddKidsModule { }
