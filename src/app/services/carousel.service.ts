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
  // behaviorsubject to manage slides
  private slidesSubject: BehaviorSubject<Slide[]> = new BehaviorSubject<Slide[]>([]);
  slides$: Observable<Slide[]> = this.slidesSubject.asObservable();

  constructor() { }

  // method to add a new slide
  addSlide(newSlide: Slide) {
    const slides = this.slidesSubject.getValue();
    slides.push(newSlide);
    this.slidesSubject.next(slides);
  }

  // method to delete a slide by index
  deleteSlide(index: number) {
    const slides = this.slidesSubject.getValue();
    slides.splice(index, 1);
    this.slidesSubject.next(slides);
  }

  // method to get slides array
  getSlidesArray(): Slide[] {
    return this.slidesSubject.getValue();
  }
}