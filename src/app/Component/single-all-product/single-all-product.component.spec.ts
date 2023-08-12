import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAllProductComponent } from './single-all-product.component';

describe('SingleAllProductComponent', () => {
  let component: SingleAllProductComponent;
  let fixture: ComponentFixture<SingleAllProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAllProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
