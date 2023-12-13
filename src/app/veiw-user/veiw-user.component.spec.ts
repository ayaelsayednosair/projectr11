import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwUserComponent } from './veiw-user.component';

describe('VeiwUserComponent', () => {
  let component: VeiwUserComponent;
  let fixture: ComponentFixture<VeiwUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiwUserComponent]
    });
    fixture = TestBed.createComponent(VeiwUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
