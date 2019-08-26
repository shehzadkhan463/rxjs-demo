import { TestBed } from '@angular/core/testing';

import { NgxCommonsService } from './ngx-commons.service';

describe('NgxCommonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCommonsService = TestBed.get(NgxCommonsService);
    expect(service).toBeTruthy();
  });
});
