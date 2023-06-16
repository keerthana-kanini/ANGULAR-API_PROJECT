import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentGetByIdComponent } from './appointment-get-by-id.component';

describe('AppointmentGetByIdComponent', () => {
  let component: AppointmentGetByIdComponent;
  let fixture: ComponentFixture<AppointmentGetByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentGetByIdComponent]
    });
    fixture = TestBed.createComponent(AppointmentGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
