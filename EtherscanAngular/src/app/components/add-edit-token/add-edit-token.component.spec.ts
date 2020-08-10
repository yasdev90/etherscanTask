import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTokenComponent } from './add-edit-token.component';

describe('AddEditTokenComponent', () => {
  let component: AddEditTokenComponent;
  let fixture: ComponentFixture<AddEditTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
