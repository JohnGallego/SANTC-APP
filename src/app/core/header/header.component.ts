import {
    ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() nav: string;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInput: ElementRef;
  public isCollapsed = true;
  public searchFocus = false;

  constructor() {}

  ngOnInit() {
  }

  searchInputFocus() {
    if (this.searchInput.nativeElement) {
      this.searchInput.nativeElement.focus();
    }
  }

}
