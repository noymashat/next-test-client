import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { Movie } from '../../shared/types';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  const mockMovie: Movie = {
    id: '1',
    title: 'A very long title that should be shortened',
    image: '',
    synopsis: '',
    rating: '',
    type: 'movie',
    released: '',
    runtime: '',
    largeimage: '',
    unogsdate: '',
    imdbid: '',
    download: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should manipulate long title and missing rating', () => {
    component.item = mockMovie;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.title).toEqual("A very long title that sh...");
    expect(component.rating).toEqual("N/A");
  });

  it('should toggle showModal', () => {
    component.showModal = false;
    component.toggleModal();
    fixture.detectChanges();
    expect(component.showModal).toBeTruthy();
  });

  it('should change showModal to false', () => {
    component.showModal = true;
    component.onCloseModal();
    fixture.detectChanges();
    expect(component.showModal).toBeFalsy();
  });

});
