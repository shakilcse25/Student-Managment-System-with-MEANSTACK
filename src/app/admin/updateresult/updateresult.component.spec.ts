import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateresultComponent } from './updateresult.component';

describe('UpdateresultComponent', () => {
  let component: UpdateresultComponent;
  let fixture: ComponentFixture<UpdateresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
