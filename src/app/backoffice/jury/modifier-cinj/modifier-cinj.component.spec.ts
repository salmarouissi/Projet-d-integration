import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCinjComponent } from './modifier-cinj.component';

describe('ModifierCinjComponent', () => {
  let component: ModifierCinjComponent;
  let fixture: ComponentFixture<ModifierCinjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierCinjComponent]
    });
    fixture = TestBed.createComponent(ModifierCinjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
