import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUsernameComponent } from './modifier-username.component';

describe('ModifierUsernameComponent', () => {
  let component: ModifierUsernameComponent;
  let fixture: ComponentFixture<ModifierUsernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierUsernameComponent]
    });
    fixture = TestBed.createComponent(ModifierUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
