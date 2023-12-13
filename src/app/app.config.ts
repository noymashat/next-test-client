import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { moviesResolver } from './services/movies.resolver';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        component: MovieListComponent,
        resolve: { movies: moviesResolver }
      }
    ]),
    provideHttpClient()
  ]
};
