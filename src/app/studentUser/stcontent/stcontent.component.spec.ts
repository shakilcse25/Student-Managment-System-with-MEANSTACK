import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StcontentComponent } from './stcontent.component';

describe('StcontentComponent', () => {
  let component: StcontentComponent;
  let fixture: ComponentFixture<StcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
