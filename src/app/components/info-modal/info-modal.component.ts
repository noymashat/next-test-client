import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../shared/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.css'
})
export class InfoModalComponent {
  @Input() movie: Movie = {
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
  @Input() showModal: boolean = false;
  @Output() onClose = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.onClose.emit();
  }
}
