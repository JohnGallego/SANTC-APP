import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() contextChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInput: ElementRef;
  public isCollapsed = true;
  public context = 'View';
  public searchFocus = false;

  constructor() {
    this.contextChange.emit(this.context);
  }

  ngOnInit() {
  }

  changeContext( context: string ) {
    this.context = context;
    this.contextChange.emit(context);
  }

  searchInputFocus() {
    if (this.searchInput.nativeElement) {
      this.searchInput.nativeElement.focus();
    }
  }

}
