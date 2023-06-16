import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientgetbyidComponent } from './patientgetbyid.component';

describe('PatientgetbyidComponent', () => {
  let component: PatientgetbyidComponent;
  let fixture: ComponentFixture<PatientgetbyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientgetbyidComponent]
    });
    fixture = TestBed.createComponent(PatientgetbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
