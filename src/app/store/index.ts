import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as fromCore from '../core/reducers/core.reducer';

export interface State {
  router: RouterReducerState;
  core: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  core: fromCore.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectCore = (state: State) => state.core;
export const selectCoreNav = createSelector(selectCore, fromCore.getNav);
export const selectCoreContext = createSelector(selectCore, fromCore.getContext);
