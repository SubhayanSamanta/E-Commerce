import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmCrdTwoDtlsComponent } from './hm-crd-two-dtls.component';

describe('HmCrdTwoDtlsComponent', () => {
  let component: HmCrdTwoDtlsComponent;
  let fixture: ComponentFixture<HmCrdTwoDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmCrdTwoDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmCrdTwoDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
