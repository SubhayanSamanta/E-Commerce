import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHmCrdTwoDtlsComponent } from './single-hm-crd-two-dtls.component';

describe('SingleHmCrdTwoDtlsComponent', () => {
  let component: SingleHmCrdTwoDtlsComponent;
  let fixture: ComponentFixture<SingleHmCrdTwoDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHmCrdTwoDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHmCrdTwoDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
