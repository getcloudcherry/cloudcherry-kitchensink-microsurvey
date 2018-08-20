import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPrefillsComponent } from './dynamic-prefills.component';

describe('DynamicPrefillsComponent', () => {
  let component: DynamicPrefillsComponent;
  let fixture: ComponentFixture<DynamicPrefillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPrefillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPrefillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
