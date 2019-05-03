import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHeadComponent } from './demo-head.component';

describe('DemoHeadComponent', () => {
  let component: DemoHeadComponent;
  let fixture: ComponentFixture<DemoHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
