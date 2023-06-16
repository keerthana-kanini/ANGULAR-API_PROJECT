import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPostComponent } from './appointment-post.component';

describe('AppointmentPostComponent', () => {
  let component: AppointmentPostComponent;
  let fixture: ComponentFixture<AppointmentPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentPostComponent]
    });
    fixture = TestBed.createComponent(AppointmentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
