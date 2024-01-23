import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { DishesService } from 'src/app/services/dishes';
import { IDish } from 'src/app/types/dish.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  slides: IDish[] = [];

  constructor(private dishesService: DishesService) {}

  ngOnInit(): void {
    this.dishesService.dishesList$.subscribe(dishes => {
      this.slides = dishes.slice(0, 20);
    });
  }
  

  slideConfig = {
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  trackByFn(index: any, item: IDish) {
    return item._id;
  }
}
