import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLearnComponent } from './third-learn.component';

describe('ThirdLearnComponent', () => {
  let component: ThirdLearnComponent;
  let fixture: ComponentFixture<ThirdLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
