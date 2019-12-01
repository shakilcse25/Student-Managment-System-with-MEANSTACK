import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StunavComponent } from './stunav.component';

describe('StunavComponent', () => {
  let component: StunavComponent;
  let fixture: ComponentFixture<StunavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StunavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StunavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
