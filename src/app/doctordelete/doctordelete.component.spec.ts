import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordeleteComponent } from './doctordelete.component';

describe('DoctordeleteComponent', () => {
  let component: DoctordeleteComponent;
  let fixture: ComponentFixture<DoctordeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctordeleteComponent]
    });
    fixture = TestBed.createComponent(DoctordeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
