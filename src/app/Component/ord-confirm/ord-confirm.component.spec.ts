import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdConfirmComponent } from './ord-confirm.component';

describe('OrdConfirmComponent', () => {
  let component: OrdConfirmComponent;
  let fixture: ComponentFixture<OrdConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
