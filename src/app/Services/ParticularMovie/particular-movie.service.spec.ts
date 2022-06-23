import { TestBed } from '@angular/core/testing';

import { ParticularMovieService } from './particular-movie.service';

describe('ParticularMovieService', () => {
  let service: ParticularMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticularMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
