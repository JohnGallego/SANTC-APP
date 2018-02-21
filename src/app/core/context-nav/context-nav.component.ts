import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-context-nav',
  templateUrl: './context-nav.component.html',
  styleUrls: ['./context-nav.component.scss']
})
export class ContextNavComponent implements OnInit {

  @Output() contextChange: EventEmitter<string> = new EventEmitter<string>();

  public context = 'Kids';

  constructor() {
    this.contextChange.emit(this.context);
  }

  ngOnInit() {
  }

  changeContext( context: string ) {
    this.context = context;
    this.contextChange.emit(context);
  }

}
