import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all movies', () => {
    const mockMoviesResponse = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' }
    ];

    service.getMovies().subscribe(movies => {
      expect(movies).toEqual(mockMoviesResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/movies');
    expect(req.request.method).toBe('GET');

    req.flush(mockMoviesResponse);
  });

  it('should handle errors', () => {
    service.getMovies().subscribe(movies => {
      expect(movies).toEqual([]);
    });

    const req = httpMock.expectOne('http://localhost:3000/movies');

    req.flush('', { status: 500, statusText: 'Internal Server Error' });
  });
});
