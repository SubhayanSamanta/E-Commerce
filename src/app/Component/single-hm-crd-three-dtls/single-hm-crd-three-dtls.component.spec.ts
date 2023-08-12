import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHmCrdThreeDtlsComponent } from './single-hm-crd-three-dtls.component';

describe('SingleHmCrdThreeDtlsComponent', () => {
  let component: SingleHmCrdThreeDtlsComponent;
  let fixture: ComponentFixture<SingleHmCrdThreeDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHmCrdThreeDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHmCrdThreeDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
