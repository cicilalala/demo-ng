import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GupiaodetailComponent } from './gupiaodetail.component';

describe('GupiaodetailComponent', () => {
  let component: GupiaodetailComponent;
  let fixture: ComponentFixture<GupiaodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GupiaodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GupiaodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
