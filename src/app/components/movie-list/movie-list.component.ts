import { RawMovie } from './../../shared/types';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-service/movies.service';
import { Movie } from '../../shared/types';
import { MovieComponent } from '../movie/movie.component';
import { FormsModule } from '@angular/forms';
import { TextSanitizerService } from '../../services/text-sanitizeer-service/text-sanitizer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieComponent, FormsModule],
  providers: [TextSanitizerService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  data: Movie[] = [];
  filteredData: Movie[] = [];
  inputValue: string = '';
  filterSeries: string = '';
  regexSpecialChars = /[^\w\s]|&\w+;|&#\d+;/g;

  constructor(
    private moviesService: MoviesService,
    private textSanitizerService: TextSanitizerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(response => {
      if (response) {
        this.data = response.map((item: RawMovie) => {
          const sanitizedTitle = this.textSanitizerService.sanitizeString(
            item.title
          );
          const searchTitle = this.removeSpecialChars(
            sanitizedTitle.toLowerCase()
          );
          item.title = sanitizedTitle;
          return {
            ...item,
            searchTitle
          };
        });
        this.filteredData = [...this.data];
      }
    });
  }

  search(): void {
    if (this.inputValue === '') {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(item =>
        item.searchTitle.includes(
          this.removeSpecialChars(this.inputValue.toLowerCase())
        )
      );
    }
  }

  filter(event: Event): void {
    this.filterSeries = (event.target as HTMLInputElement).value.toLowerCase();
    if (this.filterSeries === 'all') {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(
        item => item.type.toLowerCase() === this.filterSeries
      );
    }
  }

  private removeSpecialChars = (str: string) =>
    str.replace(this.regexSpecialChars, '');
}
