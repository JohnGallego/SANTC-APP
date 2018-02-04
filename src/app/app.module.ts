import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// libs
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


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
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
