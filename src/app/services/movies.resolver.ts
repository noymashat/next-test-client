import { ResolveFn, provideRouter } from '@angular/router';
import { Movie } from '../shared/types';
import { MoviesService } from './movies-service/movies.service';
import { inject } from '@angular/core';

export const moviesResolver: ResolveFn<Movie> = () => {
  return inject(MoviesService).getMovies();
};
