/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteResolverService } from './route-resolver.service';

describe('Service: RouteResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteResolverService]
    });
  });

  it('should ...', inject([RouteResolverService], (service: RouteResolverService) => {
    expect(service).toBeTruthy();
  }));
});
