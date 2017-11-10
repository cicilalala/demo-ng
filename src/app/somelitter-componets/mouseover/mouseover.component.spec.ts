import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseoverComponent } from './mouseover.component';

describe('MouseoverComponent', () => {
  let component: MouseoverComponent;
  let fixture: ComponentFixture<MouseoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
