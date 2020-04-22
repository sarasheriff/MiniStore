import { TestBed } from '@angular/core/testing';

import { CategoryServicesService } from './category-services.service';

describe('CategoryServicesService', () => {
  let service: CategoryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
