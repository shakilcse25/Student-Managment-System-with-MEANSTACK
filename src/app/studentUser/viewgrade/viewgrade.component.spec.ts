import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgradeComponent } from './viewgrade.component';

describe('ViewgradeComponent', () => {
  let component: ViewgradeComponent;
  let fixture: ComponentFixture<ViewgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
