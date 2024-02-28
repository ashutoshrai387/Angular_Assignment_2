import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide, CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss']
})
export class SlideListComponent {
  slides$: Observable<Slide[]>;

  constructor(private carouselService: CarouselService) {
    this.slides$ = this.carouselService.slides$;
  }

  ngOnInit() {
    this.slides$ = this.carouselService.slides$;

    // There is at least one slide when the component is initialized
    this.carouselService.addSlide({ imageUrl: 'https://images.unsplash.com/2/02.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Initial Caption' });
  }

  deleteSlide(index: number) {
    this.carouselService.deleteSlide(index);
  }
}
