import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { MoviesService } from '../../services/movies-service/movies.service';
import { TextSanitizerService } from '../../services/text-sanitizeer-service/text-sanitizer.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../../shared/types';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let moviesService: MoviesService;

  const mockMovies: Movie[] = [
    {
      id: '1',
      title: 'American History X',
      image: '',
      synopsis: '',
      rating: '',
      type: 'movie',
      released: '',
      runtime: '',
      largeimage: '',
      unogsdate: '',
      imdbid: '',
      download: ''
    },
    {
      id: '2',
      title: 'Comidark Films',
      image: '',
      synopsis: '',
      rating: '',
      type: 'series',
      released: '',
      runtime: '',
      largeimage: '',
      unogsdate: '',
      imdbid: '',
      download: ''
    },
    {
      id: '3',
      title: 'American Sniper',
      image: '',
      synopsis: '',
      rating: '',
      type: 'movie',
      released: '',
      runtime: '',
      largeimage: '',
      unogsdate: '',
      imdbid: '',
      download: ''
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListComponent, HttpClientModule],
      providers: [
        { provide: moviesService, useValue: MoviesService },
        TextSanitizerService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data and populate data field', () => {
    spyOn(moviesService, 'getMovies').and.returnValue(of(mockMovies));
    fixture.detectChanges();
    expect(component.data).toEqual(mockMovies);
    expect(component.filteredData).toEqual(mockMovies);
  });

  it('should search by inputValue and return filtered data', () => {
    component.data = mockMovies;
    component.inputValue = 'ame';
    component.search();
    fixture.detectChanges();
    expect(component.data).toEqual(mockMovies);
    expect(component.filteredData).toEqual([mockMovies[0], mockMovies[2]]);
  });

  it('should search by inputValue and return filtered data', () => {
    let mockEvent: Event = <Event>(<any>{
      target: {
        value: 'movie'
      }
    });
    component.data = mockMovies;
    component.filter(mockEvent);
    fixture.detectChanges();
    expect(component.data).toEqual(mockMovies);
    expect(component.filteredData).toEqual([mockMovies[0], mockMovies[2]]);

    mockEvent = <Event>(<any>{
      target: {
        value: 'series'
      }
    });
    component.filter(mockEvent);
    fixture.detectChanges();
    expect(component.data).toEqual(mockMovies);
    expect(component.filteredData).toEqual([mockMovies[1]]);
  });
});
