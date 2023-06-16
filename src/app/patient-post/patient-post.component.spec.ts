import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPostComponent } from './patient-post.component';

describe('PatientPostComponent', () => {
  let component: PatientPostComponent;
  let fixture: ComponentFixture<PatientPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientPostComponent]
    });
    fixture = TestBed.createComponent(PatientPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
