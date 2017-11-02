import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLearnComponent } from './first-learn.component';

describe('FirstLearnComponent', () => {
  let component: FirstLearnComponent;
  let fixture: ComponentFixture<FirstLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
