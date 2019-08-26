import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCommonsComponent } from './ngx-commons.component';

describe('NgxCommonsComponent', () => {
  let component: NgxCommonsComponent;
  let fixture: ComponentFixture<NgxCommonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCommonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
