import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiljComponent } from './profilj.component';

describe('ProfiljComponent', () => {
  let component: ProfiljComponent;
  let fixture: ComponentFixture<ProfiljComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfiljComponent]
    });
    fixture = TestBed.createComponent(ProfiljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
