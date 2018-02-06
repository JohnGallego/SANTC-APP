import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { ViewKidsRoutingModule } from './view-kids-routing.module';
import { ViewKidsComponent } from './view-kids/view-kids.component';

@NgModule({
  imports: [
    SharedModule,
    ViewKidsRoutingModule
  ],
  declarations: [
    ViewKidsComponent
  ]
})
export class ViewKidsModule { }
