import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHmCrdOneDtlsComponent } from './single-hm-crd-one-dtls.component';

describe('SingleHmCrdOneDtlsComponent', () => {
  let component: SingleHmCrdOneDtlsComponent;
  let fixture: ComponentFixture<SingleHmCrdOneDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHmCrdOneDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHmCrdOneDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
