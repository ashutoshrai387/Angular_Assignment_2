// carousel.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide, CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides$: Observable<Slide[]> = new Observable<Slide[]>();
  currentSlideIndex = 0;

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
    this.slides$ = this.carouselService.slides$;

        // Initialize currentSlideIndex to 0 or the index of the first slide
        this.slides$.subscribe(slides => {
          if (slides.length > 0) {
            this.currentSlideIndex = 0;
          }
        });
  }

  trackByFn(index: number, slide: Slide): string {
    return slide.imageUrl;
  }

  nextSlide() {
    const slides = this.carouselService.getSlidesArray();
    this.currentSlideIndex = (this.currentSlideIndex + 1) % slides.length;
  }

  prevSlide() {
    const slides = this.carouselService.getSlidesArray();
    this.currentSlideIndex = (this.currentSlideIndex - 1 + slides.length) % slides.length;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
