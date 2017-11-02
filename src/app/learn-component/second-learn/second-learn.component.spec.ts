import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLearnComponent } from './second-learn.component';

describe('SecondLearnComponent', () => {
  let component: SecondLearnComponent;
  let fixture: ComponentFixture<SecondLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
