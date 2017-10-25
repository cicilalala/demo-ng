import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistComponent } from './login-regist.component';

describe('LoginRegistComponent', () => {
  let component: LoginRegistComponent;
  let fixture: ComponentFixture<LoginRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
