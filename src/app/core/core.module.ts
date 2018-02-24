import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { ContextNavComponent } from './context-nav/context-nav.component';

import { WindowService } from './services/window.service';
import { HeaderContainerComponent } from './header-container/header-container.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    ContextNavComponent,
    HeaderContainerComponent
  ],
  exports: [
    HeaderContainerComponent
  ],
  providers: [
    WindowService
  ]
})
export class CoreModule { }
