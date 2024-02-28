import { Component } from '@angular/core';
import { Slide, CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-slide-form',
  templateUrl: './slide-form.component.html',
  styleUrls: ['./slide-form.component.scss']
})
export class SlideFormComponent {
  /* object to hold data of new slide */
  newSlide: Slide = { imageUrl: '', caption: '' };

  constructor(private carouselService: CarouselService) { }

  /* function to add new slide */
  addSlide() {
    if (this.newSlide.imageUrl && this.newSlide.caption) {
      this.carouselService.addSlide(this.newSlide);
      this.newSlide = { imageUrl: '', caption: '' };
    }
  }
}