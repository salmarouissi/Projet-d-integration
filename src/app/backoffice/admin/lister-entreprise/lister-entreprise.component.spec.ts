import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEntrepriseComponent } from './lister-entreprise.component';

describe('ListerEntrepriseComponent', () => {
  let component: ListerEntrepriseComponent;
  let fixture: ComponentFixture<ListerEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerEntrepriseComponent]
    });
    fixture = TestBed.createComponent(ListerEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
