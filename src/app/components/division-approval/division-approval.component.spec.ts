import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionApprovalComponent } from './division-approval.component';

describe('DivisionApprovalComponent', () => {
  let component: DivisionApprovalComponent;
  let fixture: ComponentFixture<DivisionApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
