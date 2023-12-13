import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitUserComponent } from './dit-user.component';

describe('DitUserComponent', () => {
  let component: DitUserComponent;
  let fixture: ComponentFixture<DitUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DitUserComponent]
    });
    fixture = TestBed.createComponent(DitUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
