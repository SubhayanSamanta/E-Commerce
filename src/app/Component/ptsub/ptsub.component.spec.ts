import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsubComponent } from './ptsub.component';

describe('PtsubComponent', () => {
  let component: PtsubComponent;
  let fixture: ComponentFixture<PtsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
