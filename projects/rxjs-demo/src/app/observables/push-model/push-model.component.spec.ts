import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushModelComponent } from './push-model.component';

describe('PushModelComponent', () => {
  let component: PushModelComponent;
  let fixture: ComponentFixture<PushModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
