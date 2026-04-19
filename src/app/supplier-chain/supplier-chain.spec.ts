import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierChain } from './supplier-chain';

describe('SupplierChain', () => {
  let component: SupplierChain;
  let fixture: ComponentFixture<SupplierChain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierChain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierChain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
