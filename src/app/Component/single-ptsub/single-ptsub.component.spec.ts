import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePtsubComponent } from './single-ptsub.component';

describe('SinglePtsubComponent', () => {
  let component: SinglePtsubComponent;
  let fixture: ComponentFixture<SinglePtsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePtsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePtsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
