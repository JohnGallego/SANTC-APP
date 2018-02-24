import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// app
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

// store
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreEffects } from './core/effects/core.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // libs
    NgbModule.forRoot(),

    // app
    AppRoutingModule,
    CoreModule,

    // store
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ CoreEffects ]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
