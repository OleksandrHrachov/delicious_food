import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { IDish } from 'src/app/types/dish.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  
  slides: IDish[] = [
    {
      id: '1',
      title: 'title 1',
      imageUrl: 'assets/images/slide-1.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis maiores pariatur, saepe perferendis facere possimus dicta recusandae quam inventore, iusto nisi! Dolore laborum quibusdam repellendus error sit repudiandae corrupti!',
      nutritionalValue: {
        proteins: 15,
        fats: 8,
        carbohydrates: 23,
        calories: 120,
      },
      stepDescription: ['slide - 1'],
      category: 'soup',
      cookingTime: 1,
    },
    {
      id: '2',
      title: 'title 2',
      imageUrl: 'assets/images/slide-2.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis maiores pariatur, saepe perferendis facere possimus dicta recusandae quam inventore, iusto nisi! Dolore laborum quibusdam repellendus error sit repudiandae corrupti!',
      nutritionalValue: {
        proteins: 15,
        fats: 8,
        carbohydrates: 23,
        calories: 160,
      },
      stepDescription: ['slide - 2'],
      cookingTime: 2,
      category: 'salad',
    },
    {
      id: '3',
      title: 'title 3',
      imageUrl: 'assets/images/slide-3.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis maiores pariatur, saepe perferendis facere possimus dicta recusandae quam inventore, iusto nisi! Dolore laborum quibusdam repellendus error sit repudiandae corrupti!',
      nutritionalValue: {
        proteins: 15,
        fats: 8,
        carbohydrates: 23,
        calories: 100,
      },
      stepDescription: ['slide - 3'],
      cookingTime: 1.5,
      category: 'dessert',
    },
    {
      id: '4',
      title: 'title 4',
      imageUrl: 'assets/images/slide-4.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis maiores pariatur, saepe perferendis facere possimus dicta recusandae quam inventore, iusto nisi! Dolore laborum quibusdam repellendus error sit repudiandae corrupti!',
      nutritionalValue: {
        proteins: 15,
        fats: 8,
        carbohydrates: 23,
        calories: 10,
      },
      stepDescription: ['slide - 4'],
      cookingTime: 0.5,
      category: 'dessert',
    },
    {
      id: '5',
      title: 'title 5',
      imageUrl: 'assets/images/slide-5.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis maiores pariatur, saepe perferendis facere possimus dicta recusandae quam inventore, iusto nisi! Dolore laborum quibusdam repellendus error sit repudiandae corrupti!',
      nutritionalValue: {
        proteins: 15,
        fats: 8,
        carbohydrates: 23,
        calories: 90,
      },
      stepDescription: ['slide - 5'],
      cookingTime: 1,
      category: 'salad',
    },
    {
      id: '6',
      title: 'title some',
      imageUrl: 'assets/images/slide-6.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis maiores pariatur, saepe perferendis facere possimus dicta recusandae quam inventore, iusto nisi! Dolore laborum quibusdam repellendus error sit repudiandae corrupti!',
      nutritionalValue: {
        proteins: 15,
        fats: 8,
        carbohydrates: 23,
        calories: 40,
      },
      stepDescription: ['slide - 6'],
      cookingTime: 1,
      category: 'dessert',
    },
    {
      id: '7',
      title: '7 title',
      imageUrl: 'assets/images/slide-7.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis maiores pariatur, saepe perferendis facere possimus dicta recusandae quam inventore, iusto nisi! Dolore laborum quibusdam repellendus error sit repudiandae corrupti!',
      nutritionalValue: {
        proteins: 15,
        fats: 8,
        carbohydrates: 23,
        calories: 320,
      },
      stepDescription: ['slide - 7'],
      cookingTime: 2,
      category: 'soup',
    },
    {
      id: '8',
      title: 'title 9',
      imageUrl: 'assets/images/slide-8.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facilis maiores pariatur, saepe perferendis facere possimus dicta recusandae quam inventore, iusto nisi! Dolore laborum quibusdam repellendus error sit repudiandae corrupti!',
      nutritionalValue: {
        proteins: 15,
        fats: 8,
        carbohydrates: 23,
        calories: 150,
      },
      stepDescription: ['slide - 8'],
      cookingTime: 0.5,
      category: 'dessert',
    },
  ];

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
    return item.id;
  }
}
