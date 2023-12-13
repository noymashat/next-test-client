import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../shared/types';
import { CommonModule } from '@angular/common';
import { TextSanitizerService } from '../../services/text-sanitizeer-service/text-sanitizer.service';
import { SafeHtml } from '@angular/platform-browser';
import { DurationDisplayPipe } from '../../shared/pipes/title-display.pipe copy';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports: [CommonModule, DurationDisplayPipe],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.css'
})
export class InfoModalComponent {
  @Input() movie: Movie = {
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
  @Input() showModal: boolean = false;
  @Output() onClose = new EventEmitter();
  safeSynopsis: SafeHtml = '';

  constructor(private textSanitizerService: TextSanitizerService) {}

  ngOnInit(): void {
    this.safeSynopsis = this.textSanitizerService.sanitizeHtml(
      this.movie.synopsis
    );
  }

  closeModal() {
    this.onClose.emit();
  }
}
