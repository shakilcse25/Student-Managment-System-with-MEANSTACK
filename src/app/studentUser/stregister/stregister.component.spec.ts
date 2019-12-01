import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StregisterComponent } from './stregister.component';

describe('StregisterComponent', () => {
  let component: StregisterComponent;
  let fixture: ComponentFixture<StregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
