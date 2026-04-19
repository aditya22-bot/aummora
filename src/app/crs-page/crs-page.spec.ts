import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsPage } from './crs-page';

describe('CrsPage', () => {
  let component: CrsPage;
  let fixture: ComponentFixture<CrsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
