import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  SetNav = '[Core] SetNav',
  SetContext = '[Core] SetContext'
}

export class SetNav implements Action {
  readonly type = CoreActionTypes.SetNav;
  constructor(public payload: string) {}
}

export class SetContext implements Action {
  readonly type = CoreActionTypes.SetContext;
  constructor(public payload: string) { }
}

export type CoreActions = SetNav | SetContext;
