import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDachgeberComponent } from './edit-accommodation.component';

describe('EditDachgeberComponent', () => {
  let component: EditDachgeberComponent;
  let fixture: ComponentFixture<EditDachgeberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDachgeberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDachgeberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
