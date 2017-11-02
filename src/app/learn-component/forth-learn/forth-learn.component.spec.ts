import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthLearnComponent } from './forth-learn.component';

describe('ForthLearnComponent', () => {
  let component: ForthLearnComponent;
  let fixture: ComponentFixture<ForthLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
