import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StudentCardComponent } from './student-card/student-card.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    StudentCardComponent
  ],
  exports: [
    CommonModule,
    NgbModule,

    StudentCardComponent
  ]
})
export class SharedModule { }
