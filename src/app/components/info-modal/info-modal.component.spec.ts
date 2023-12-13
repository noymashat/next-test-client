import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModalComponent } from './info-modal.component';

describe('InfoModalComponent', () => {
  let component: InfoModalComponent;
  let fixture: ComponentFixture<InfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClose event when closeModal is called', () => {
    spyOn(component.onClose, 'emit');

    component.closeModal();

    expect(component.onClose.emit).toHaveBeenCalled();
  });

});
