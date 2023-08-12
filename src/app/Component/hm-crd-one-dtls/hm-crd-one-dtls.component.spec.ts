import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmCrdOneDtlsComponent } from './hm-crd-one-dtls.component';

describe('HmCrdOneDtlsComponent', () => {
  let component: HmCrdOneDtlsComponent;
  let fixture: ComponentFixture<HmCrdOneDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmCrdOneDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmCrdOneDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
