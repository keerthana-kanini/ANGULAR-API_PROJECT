import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorgetbyidComponent } from './doctorgetbyid.component';

describe('DoctorgetbyidComponent', () => {
  let component: DoctorgetbyidComponent;
  let fixture: ComponentFixture<DoctorgetbyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorgetbyidComponent]
    });
    fixture = TestBed.createComponent(DoctorgetbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
