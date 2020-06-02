import { TestBed } from '@angular/core/testing';

import { SkudService } from './skud.service';

describe('SkudService', () => {
  let service: SkudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
