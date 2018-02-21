import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navContextChange(nav) {
    console.log(nav);
  }

  subContextChange(nav) {
    console.log(nav);
  }

}
