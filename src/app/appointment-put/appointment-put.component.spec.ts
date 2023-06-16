import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPutComponent } from './appointment-put.component';

describe('AppointmentPutComponent', () => {
  let component: AppointmentPutComponent;
  let fixture: ComponentFixture<AppointmentPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentPutComponent]
    });
    fixture = TestBed.createComponent(AppointmentPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
