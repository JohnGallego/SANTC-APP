import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('searchInput') searchInput: ElementRef;
  isCollapsed = true;
  context = 'View';
  searchFocus = false;

  constructor() { }

  ngOnInit() {
  }

  changeContext( context: string ) {
    this.context = context;
  }

  searchInputFocus() {
    if (this.searchInput.nativeElement) {
      this.searchInput.nativeElement.focus();
    }
  }

}
