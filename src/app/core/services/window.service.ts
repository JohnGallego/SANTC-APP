import { Injectable, ElementRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';


@Injectable()
export class WindowService {

  private _changeSubject: BehaviorSubject<{ x: number, y: number }>
    = new BehaviorSubject<{ x: number, y: number }>({ x: 0, y: 0 });

  constructor(private _zone: NgZone) {
    this._zone.runOutsideAngular(() => {
      Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .map( e => window.innerHeight + window.innerWidth )
      .distinctUntilChanged()
      .subscribe( () => {
        this._zone.run(() => {
          this._changeSubject.next({ x: window.innerWidth, y: window.innerHeight });
        });
      });
    });
  }

  windowResize(): Observable<{ x: number, y: number }> {
    return this._changeSubject;
  }

  elementResize( element: HTMLElement ): Observable<{ x: number, y: number }> {
    return this._changeSubject
      .map( () => element.getBoundingClientRect().width + element.getBoundingClientRect().height)
      .distinctUntilChanged()
      .map( () => ({
        x: element.getBoundingClientRect().width,
        y: element.getBoundingClientRect().height
      }));
  }

}
