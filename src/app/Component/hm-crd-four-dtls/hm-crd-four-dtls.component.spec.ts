import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmCrdFourDtlsComponent } from './hm-crd-four-dtls.component';

describe('HmCrdFourDtlsComponent', () => {
  let component: HmCrdFourDtlsComponent;
  let fixture: ComponentFixture<HmCrdFourDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmCrdFourDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmCrdFourDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
