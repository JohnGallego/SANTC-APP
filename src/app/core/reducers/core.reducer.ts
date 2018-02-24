import { Action } from '@ngrx/store';
import { CoreActions, CoreActionTypes } from '../actions/core.actions';

export interface State {
  nav: string;
  context: string;
}

export const initialState: State = {
  nav: 'view',
  context: 'kids'
};

export function reducer(state = initialState, action: CoreActions): State {
  switch (action.type) {

    case CoreActionTypes.SetNav:
      return {
        ...state,
        nav: action.payload
      };

    case CoreActionTypes.SetContext:
      return {
        ...state,
        context: action.payload
      };


    default:
      return state;
  }
}

export const getNav = (state: State) => state.nav;
export const getContext = (state: State) => state.context;
