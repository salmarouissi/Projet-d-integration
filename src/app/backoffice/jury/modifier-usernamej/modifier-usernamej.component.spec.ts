import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUsernamejComponent } from './modifier-usernamej.component';

describe('ModifierUsernamejComponent', () => {
  let component: ModifierUsernamejComponent;
  let fixture: ComponentFixture<ModifierUsernamejComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierUsernamejComponent]
    });
    fixture = TestBed.createComponent(ModifierUsernamejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
