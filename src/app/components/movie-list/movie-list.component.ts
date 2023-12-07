import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../shared/types';
import { MovieComponent } from '../movie/movie.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieComponent, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  data: Movie[] = [];
  filteredData: Movie[] = [];
  inputValue: string = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  getDataFromAPI(): void {
    this.moviesService.getMovies().subscribe(response => {
      this.data = response;
      this.filteredData = [...this.data];
    });
  }

  search(): void {
    if (this.inputValue === '') {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(item =>
        item.title.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    }
  }
}
