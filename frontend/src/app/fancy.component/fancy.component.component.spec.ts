import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyComponentComponent } from './fancy.component.component';

describe('Fancy.ComponentComponent', () => {
  let component: FancyComponentComponent;
  let fixture: ComponentFixture<FancyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
