import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPutComponent } from './patient-put.component';

describe('PatientPutComponent', () => {
  let component: PatientPutComponent;
  let fixture: ComponentFixture<PatientPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientPutComponent]
    });
    fixture = TestBed.createComponent(PatientPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
