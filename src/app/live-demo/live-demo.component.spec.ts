import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDemoComponent } from './live-demo.component';

describe('LiveDemoComponent', () => {
  let component: LiveDemoComponent;
  let fixture: ComponentFixture<LiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
