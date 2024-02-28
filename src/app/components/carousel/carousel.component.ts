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
  // observable to hold slides
  slides$: Observable<Slide[]> = new Observable<Slide[]>();

  currentSlideIndex = 0;

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
    // subscribe to slides observable
    this.slides$ = this.carouselService.slides$;
  }

  // track by function for ngFor
  trackByFn(index: number, slide: Slide): string {
    return slide.imageUrl;
  }

  // move to the next slide
  nextSlide() {
    const slides = this.carouselService.getSlidesArray();
    this.currentSlideIndex = (this.currentSlideIndex + 1) % slides.length;
  }

  // move to the previous slide
  prevSlide() {
    const slides = this.carouselService.getSlidesArray();
    this.currentSlideIndex = (this.currentSlideIndex - 1 + slides.length) % slides.length;
  }

  // go to a specific slide
  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}