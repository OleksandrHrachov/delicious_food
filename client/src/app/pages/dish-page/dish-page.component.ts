import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { DishesService } from 'src/app/services/dishes';
import { IDish } from 'src/app/types/dish.interface';

@Component({
  selector: 'app-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.scss'],
})
export class DishPageComponent implements OnInit {
  selectedDish!: IDish;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dishesService: DishesService) {
  }

  ngOnInit(): void {

    if (this.dishesService.selectedDish) {
      this.selectedDish = this.dishesService.selectedDish;
    } else {
      const dishId = this.activatedRoute.snapshot.params['id'].split('-').pop();

      try {
        this.dishesService.getDishById(dishId).subscribe(dish => {
          this.selectedDish = dish;
        });
      } catch (error) {
        console.log('ERROR =>', error)
      }
    }
  }

}
