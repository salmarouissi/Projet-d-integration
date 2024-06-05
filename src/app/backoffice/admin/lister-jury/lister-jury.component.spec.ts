import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerJuryComponent } from './lister-jury.component';

describe('ListerJuryComponent', () => {
  let component: ListerJuryComponent;
  let fixture: ComponentFixture<ListerJuryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerJuryComponent]
    });
    fixture = TestBed.createComponent(ListerJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
