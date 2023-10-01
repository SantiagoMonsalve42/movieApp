import { TestBed } from '@angular/core/testing';

import { SessionInterceptorInterceptor } from './session-interceptor.interceptor';

describe('SessionInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SessionInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SessionInterceptorInterceptor = TestBed.inject(SessionInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
