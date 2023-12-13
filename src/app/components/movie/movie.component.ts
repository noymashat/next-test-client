import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../shared/types';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { TitleDisplayPipe } from '../../shared/pipes/title-display.pipe';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, InfoModalComponent, TitleDisplayPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() item: Movie = {
    id: '',
    title: '',
    searchTitle: '',
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
  rating = '';
  constructor() {}

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onCloseModal() {
    this.showModal = false;
  }
}
