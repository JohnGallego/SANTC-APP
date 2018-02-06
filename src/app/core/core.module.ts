import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { ContextNavComponent } from './context-nav/context-nav.component';

import { WindowService } from './services/window.service';

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
  ],
  providers: [
    WindowService
  ]
})
export class CoreModule { }
