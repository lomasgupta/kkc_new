import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePackagingComponent } from './customize-packaging.component';

describe('CustomizePackagingComponent', () => {
  let component: CustomizePackagingComponent;
  let fixture: ComponentFixture<CustomizePackagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizePackagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizePackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
