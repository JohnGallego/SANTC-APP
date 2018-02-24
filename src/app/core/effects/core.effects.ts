import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoreActions, CoreActionTypes } from '../actions/core.actions';
import { withLatestFrom, map } from 'rxjs/operators';
import * as fromStore from '../../store';
import 'rxjs/add/operator/do';


@Injectable()
export class CoreEffects {

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(CoreActionTypes.SetContext, CoreActionTypes.SetNav),
    withLatestFrom(this.store.select(fromStore.selectCore)),
      map(([action, state]) => `/${state.context}/${state.nav}` )
  ).do( path => {
    console.log(path);
    this.router.navigate([path]);
  });

  constructor(
    private actions$: Actions,
    private store: Store<fromStore.State>,
    private router: Router
  ) {}
}
