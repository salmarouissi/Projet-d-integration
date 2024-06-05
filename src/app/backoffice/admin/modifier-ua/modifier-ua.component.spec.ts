import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUAComponent } from './modifier-ua.component';

describe('ModifierUAComponent', () => {
  let component: ModifierUAComponent;
  let fixture: ComponentFixture<ModifierUAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierUAComponent]
    });
    fixture = TestBed.createComponent(ModifierUAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
