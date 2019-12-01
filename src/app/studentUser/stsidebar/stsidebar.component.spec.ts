import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StsidebarComponent } from './stsidebar.component';

describe('StsidebarComponent', () => {
  let component: StsidebarComponent;
  let fixture: ComponentFixture<StsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
