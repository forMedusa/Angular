import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProductTopBarComponent } from './one-product-top-bar.component';

describe('OneProductTopBarComponent', () => {
  let component: OneProductTopBarComponent;
  let fixture: ComponentFixture<OneProductTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProductTopBarComponent]
    });
    fixture = TestBed.createComponent(OneProductTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
