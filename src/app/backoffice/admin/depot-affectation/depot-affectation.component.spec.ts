import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotAffectationComponent } from './depot-affectation.component';

describe('DepotAffectationComponent', () => {
  let component: DepotAffectationComponent;
  let fixture: ComponentFixture<DepotAffectationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotAffectationComponent]
    });
    fixture = TestBed.createComponent(DepotAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
