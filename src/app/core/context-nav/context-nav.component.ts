import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context-nav',
  templateUrl: './context-nav.component.html',
  styleUrls: ['./context-nav.component.scss']
})
export class ContextNavComponent implements OnInit {

  context = 'Kids';

  constructor() { }

  ngOnInit() {
  }

  changeContext( context: string ) {
    this.context = context;
  }

}
