import { Component } from '@angular/core';
import { Slide, CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-slide-form',
  templateUrl: './slide-form.component.html',
  styleUrls: ['./slide-form.component.scss']
})
export class SlideFormComponent {
  newSlide: Slide = { imageUrl: '', caption: '' };

  constructor(private carouselService: CarouselService) { }

  addSlide() {
    if (this.newSlide.imageUrl && this.newSlide.caption) {
      this.carouselService.addSlide(this.newSlide);
      this.newSlide = { imageUrl: '', caption: '' };
    }
  }
}
