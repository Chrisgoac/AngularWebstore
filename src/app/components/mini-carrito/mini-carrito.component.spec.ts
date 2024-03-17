import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCarritoComponent } from './mini-carrito.component';

describe('MiniCarritoComponent', () => {
  let component: MiniCarritoComponent;
  let fixture: ComponentFixture<MiniCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniCarritoComponent]
    });
    fixture = TestBed.createComponent(MiniCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
