import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreinformationComponent } from './moreinformation.component';

describe('MoreinformationComponent', () => {
  let component: MoreinformationComponent;
  let fixture: ComponentFixture<MoreinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
