import { NgModule } from '@angular/core';
import { GoogleSignInComponent } from 'angular-google-signin';

import { SharedModule } from '../shared/shared.module';
import { ContextNavComponent } from './context-nav/context-nav.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderComponent } from './header/header.component';
import { WindowService } from './services/window.service';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    ContextNavComponent,
    HeaderContainerComponent,
    SigninComponent,
    GoogleSignInComponent
  ],
  exports: [
    HeaderContainerComponent
  ],
  providers: [
    WindowService
  ]
})
export class CoreModule { }
