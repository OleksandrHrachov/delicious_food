import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes';
import { IDish } from 'src/app/types/dish.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  firstSlidesLine: IDish[] = [];
  secondSlidesLine: IDish[] = [];
  thirdSlidesLine: IDish[] = [];

  constructor(private dishesService: DishesService) {}
  ngOnInit(): void {
    this.dishesService.dishesList$.subscribe((dishes) => {
      this.firstSlidesLine = dishes.slice(0, 7);
      this.secondSlidesLine = dishes.slice(7, 13);
      this.thirdSlidesLine = dishes.slice(13, 21)
    });

    this.dishesService.getDishes().subscribe();
  }
}
