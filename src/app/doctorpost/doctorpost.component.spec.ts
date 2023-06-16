import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpostComponent } from './doctorpost.component';

describe('DoctorpostComponent', () => {
  let component: DoctorpostComponent;
  let fixture: ComponentFixture<DoctorpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorpostComponent]
    });
    fixture = TestBed.createComponent(DoctorpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
