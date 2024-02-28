import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Slide {
  imageUrl: string;
  caption: string;
}

@Injectable({
  providedIn: 'root'
})

export class CarouselService {
  private slidesSubject: BehaviorSubject<Slide[]> = new BehaviorSubject<Slide[]>([]);
  slides$: Observable<Slide[]> = this.slidesSubject.asObservable();

  constructor() { }

  addSlide(newSlide: Slide) {
    const slides = this.slidesSubject.getValue();
    slides.push(newSlide);
    this.slidesSubject.next(slides);
  }

  deleteSlide(index: number) {
    const slides = this.slidesSubject.getValue();
    slides.splice(index, 1);
    this.slidesSubject.next(slides);
  }

  getSlidesArray(): Slide[] {
    return this.slidesSubject.getValue();
  }
}