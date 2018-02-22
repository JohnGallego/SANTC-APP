import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum NavigationActionTypes {
  Go = '[Navigation] Go',
  Forward = '[Navigation] Forward',
  Back = '[Navigation] Back',
}

export class Go implements Action {
  readonly type = NavigationActionTypes.Go;

  constructor(public payload: {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
  }) {}
}

export class Forward implements Action {
  readonly type = NavigationActionTypes.Forward;
}

export class Back implements Action {
  readonly type = NavigationActionTypes.Back;
}

export type NavigationActions = Go | Forward | Back;
