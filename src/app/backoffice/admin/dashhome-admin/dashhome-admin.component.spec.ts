import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashhomeAdminComponent } from './dashhome-admin.component';

describe('DashhomeAdminComponent', () => {
  let component: DashhomeAdminComponent;
  let fixture: ComponentFixture<DashhomeAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashhomeAdminComponent]
    });
    fixture = TestBed.createComponent(DashhomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
