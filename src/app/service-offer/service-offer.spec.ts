import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOffer } from './service-offer';

describe('ServiceOffer', () => {
  let component: ServiceOffer;
  let fixture: ComponentFixture<ServiceOffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceOffer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOffer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
