import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit, AfterViewInit {

  @ViewChild('container') container: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
