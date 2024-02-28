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
    /* Initialize slides observable */
    this.slides$ = this.carouselService.slides$;
  }

  ngOnInit() {
    /* subscribe to slides observable */
    this.slides$ = this.carouselService.slides$;

    /* adding a default slide */
    this.carouselService.addSlide({ imageUrl: 'https://images.unsplash.com/2/02.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Dynamic angular slide' });
  }

  /* function to delete a slide */
  deleteSlide(index: number) {
    this.carouselService.deleteSlide(index);
  }
}