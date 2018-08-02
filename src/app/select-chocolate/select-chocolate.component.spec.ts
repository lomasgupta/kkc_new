import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChocolateComponent } from './select-chocolate.component';

describe('SelectChocolateComponent', () => {
  let component: SelectChocolateComponent;
  let fixture: ComponentFixture<SelectChocolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChocolateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
