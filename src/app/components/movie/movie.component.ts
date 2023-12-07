import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../shared/types';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [InfoModalComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  @Input() item: Movie = {
    id: '',
    title: '',
    image: '',
    synopsis: '',
    rating: '',
    type: '',
    released: '',
    runtime: '',
    largeimage: '',
    unogsdate: '',
    imdbid: '',
    download: ''
  };
  showModal: boolean = false;
  title = '';
  rating = '';
  constructor() {
  }

  ngOnInit(): void {
    this.title = this.item.title.length > 25 ? this.item.title.substring(0, 25) + "..." : this.item.title;
    this.rating = this.item.rating === '' ? "N/A" : this.item.rating;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onCloseModal() {
    this.showModal = false;
  }
}
