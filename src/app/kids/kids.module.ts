import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { KidsRoutingModule } from './kids-routing.module';
import { ViewPageComponent } from './view-page/view-page.component';
import { AddPageComponent } from './add-page/add-page.component';

@NgModule({
  imports: [
    SharedModule,
    KidsRoutingModule
  ],
  declarations: [ViewPageComponent, AddPageComponent]
})
export class KidsModule { }
