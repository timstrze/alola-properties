import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMoreConfirmComponent } from './order-more-confirm.component';

describe('OrderMoreConfirmComponent', () => {
  let component: OrderMoreConfirmComponent;
  let fixture: ComponentFixture<OrderMoreConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMoreConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMoreConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
