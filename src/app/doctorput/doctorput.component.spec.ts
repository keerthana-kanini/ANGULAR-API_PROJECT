import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorputComponent } from './doctorput.component';

describe('DoctorputComponent', () => {
  let component: DoctorputComponent;
  let fixture: ComponentFixture<DoctorputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorputComponent]
    });
    fixture = TestBed.createComponent(DoctorputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
