import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSidebarComponent } from './listing-sidebar.component';

describe('ListingSidebarComponent', () => {
  let component: ListingSidebarComponent;
  let fixture: ComponentFixture<ListingSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingSidebarComponent]
    });
    fixture = TestBed.createComponent(ListingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
