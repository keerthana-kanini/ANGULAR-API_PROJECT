import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentGetMethodComponent } from './appointment-get-method.component';

describe('AppointmentGetMethodComponent', () => {
  let component: AppointmentGetMethodComponent;
  let fixture: ComponentFixture<AppointmentGetMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentGetMethodComponent]
    });
    fixture = TestBed.createComponent(AppointmentGetMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
