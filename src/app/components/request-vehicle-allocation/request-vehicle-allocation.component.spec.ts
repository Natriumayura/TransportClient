import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVehicleAllocationComponent } from './request-vehicle-allocation.component';

describe('RequestVehicleAllocationComponent', () => {
  let component: RequestVehicleAllocationComponent;
  let fixture: ComponentFixture<RequestVehicleAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestVehicleAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVehicleAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
