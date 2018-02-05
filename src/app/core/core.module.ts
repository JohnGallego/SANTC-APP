import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
    HeaderComponent,
  ]
})
export class CoreModule { }
