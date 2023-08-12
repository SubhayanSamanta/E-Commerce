import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHmCrdFourDtlsComponent } from './single-hm-crd-four-dtls.component';

describe('SingleHmCrdFourDtlsComponent', () => {
  let component: SingleHmCrdFourDtlsComponent;
  let fixture: ComponentFixture<SingleHmCrdFourDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHmCrdFourDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHmCrdFourDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
