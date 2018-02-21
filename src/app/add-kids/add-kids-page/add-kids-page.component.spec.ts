import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKidsPageComponent } from './add-kids-page.component';

describe('AddKidsPageComponent', () => {
  let component: AddKidsPageComponent;
  let fixture: ComponentFixture<AddKidsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKidsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
