import { TestBed } from '@angular/core/testing';

import { ShoutoutService } from './shoutout.service';

describe('ShoutoutService', () => {
  let service: ShoutoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoutoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
