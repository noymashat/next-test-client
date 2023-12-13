import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { moviesResolver } from './services/movies.resolver';

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    resolve: { movies: moviesResolver }
  }
];
