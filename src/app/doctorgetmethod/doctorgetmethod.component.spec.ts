import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorgetmethodComponent } from './doctorgetmethod.component';

describe('DoctorgetmethodComponent', () => {
  let component: DoctorgetmethodComponent;
  let fixture: ComponentFixture<DoctorgetmethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorgetmethodComponent]
    });
    fixture = TestBed.createComponent(DoctorgetmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
