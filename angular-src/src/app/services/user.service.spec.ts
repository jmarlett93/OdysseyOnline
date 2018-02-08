import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('ListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));
});
