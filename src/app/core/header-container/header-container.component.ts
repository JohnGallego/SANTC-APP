import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as actions from '../actions/core.actions';
import * as fromStore from '../../store';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  public nav$: Observable<string>;
  public context$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {
    this.nav$ = store.pipe(select(fromStore.selectCoreNav));
    this.context$ = store.pipe(select(fromStore.selectCoreContext));
  }

  ngOnInit() {
  }

  navChange(nav) {
    this.store.dispatch(new actions.SetNav(nav));
  }

  contextChange(context) {
    this.store.dispatch(new actions.SetContext(context));
  }

}
