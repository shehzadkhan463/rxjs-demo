import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyRxjsComponent } from './why-rxjs.component';

describe('WhyRxjsComponent', () => {
  let component: WhyRxjsComponent;
  let fixture: ComponentFixture<WhyRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
