import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { ContextNavComponent } from './context-nav/context-nav.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    ContextNavComponent
  ],
  exports: [
    HeaderComponent,
    ContextNavComponent
  ]
})
export class CoreModule { }
