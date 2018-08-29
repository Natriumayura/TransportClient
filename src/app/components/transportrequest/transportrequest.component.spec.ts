import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportrequestComponent } from './transportrequest.component';

describe('TransportrequestComponent', () => {
  let component: TransportrequestComponent;
  let fixture: ComponentFixture<TransportrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
