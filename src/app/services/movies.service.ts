import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getMovieById(movieId: string): Observable<any> {
    const url = `${this.baseUrl}/${movieId}`;
    return this.http.get<any>(url);
  }
}
