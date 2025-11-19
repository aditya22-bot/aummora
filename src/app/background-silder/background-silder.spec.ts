import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSilder } from './background-silder';

describe('BackgroundSilder', () => {
  let component: BackgroundSilder;
  let fixture: ComponentFixture<BackgroundSilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundSilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundSilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
