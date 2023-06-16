import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientgetmethodComponent } from './patientgetmethod.component';

describe('PatientgetmethodComponent', () => {
  let component: PatientgetmethodComponent;
  let fixture: ComponentFixture<PatientgetmethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientgetmethodComponent]
    });
    fixture = TestBed.createComponent(PatientgetmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
