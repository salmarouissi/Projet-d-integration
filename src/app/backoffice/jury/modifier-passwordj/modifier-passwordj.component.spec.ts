import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPasswordjComponent } from './modifier-passwordj.component';

describe('ModifierPasswordjComponent', () => {
  let component: ModifierPasswordjComponent;
  let fixture: ComponentFixture<ModifierPasswordjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierPasswordjComponent]
    });
    fixture = TestBed.createComponent(ModifierPasswordjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
