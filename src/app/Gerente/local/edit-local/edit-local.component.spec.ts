import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocalComponent } from './edit-local.component';

describe('EditLocalComponent', () => {
  let component: EditLocalComponent;
  let fixture: ComponentFixture<EditLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
