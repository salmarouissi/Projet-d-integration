import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSoutenanceComponent } from './ajouter-soutenance.component';

describe('AjouterSoutenanceComponent', () => {
  let component: AjouterSoutenanceComponent;
  let fixture: ComponentFixture<AjouterSoutenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterSoutenanceComponent]
    });
    fixture = TestBed.createComponent(AjouterSoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
