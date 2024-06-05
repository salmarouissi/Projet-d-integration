import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPAComponent } from './modifier-pa.component';

describe('ModifierPAComponent', () => {
  let component: ModifierPAComponent;
  let fixture: ComponentFixture<ModifierPAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierPAComponent]
    });
    fixture = TestBed.createComponent(ModifierPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
