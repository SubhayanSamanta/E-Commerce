import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmCrdThreeDtlsComponent } from './hm-crd-three-dtls.component';

describe('HmCrdThreeDtlsComponent', () => {
  let component: HmCrdThreeDtlsComponent;
  let fixture: ComponentFixture<HmCrdThreeDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmCrdThreeDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmCrdThreeDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
