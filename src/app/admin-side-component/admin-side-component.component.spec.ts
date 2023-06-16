import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideComponentComponent } from './admin-side-component.component';

describe('AdminSideComponentComponent', () => {
  let component: AdminSideComponentComponent;
  let fixture: ComponentFixture<AdminSideComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSideComponentComponent]
    });
    fixture = TestBed.createComponent(AdminSideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
