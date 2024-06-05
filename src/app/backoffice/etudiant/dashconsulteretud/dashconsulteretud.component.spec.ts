import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashconsulteretudComponent } from './dashconsulteretud.component';

describe('DashconsulteretudComponent', () => {
  let component: DashconsulteretudComponent;
  let fixture: ComponentFixture<DashconsulteretudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashconsulteretudComponent]
    });
    fixture = TestBed.createComponent(DashconsulteretudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
