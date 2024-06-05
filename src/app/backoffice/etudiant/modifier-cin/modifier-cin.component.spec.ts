import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCinComponent } from './modifier-cin.component';

describe('ModifierCinComponent', () => {
  let component: ModifierCinComponent;
  let fixture: ComponentFixture<ModifierCinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierCinComponent]
    });
    fixture = TestBed.createComponent(ModifierCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
