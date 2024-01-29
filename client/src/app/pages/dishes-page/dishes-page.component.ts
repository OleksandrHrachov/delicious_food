import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DishesService } from 'src/app/services/dishes';
import { IDish, UnionCategory } from 'src/app/types/dish.interface';

@Component({
  selector: 'app-dishes-page',
  templateUrl: './dishes-page.component.html',
  styleUrls: ['./dishes-page.component.scss'],
})
export class DishesPageComponent {
  viewDishes: IDish[] = [];
  viewCategory: UnionCategory[] = ['dessert', 'soup', 'salad'];
  selectedCategory = new BehaviorSubject<UnionCategory | ''>('');

  private activatedRoutequeryParamSub!: Subscription;

  constructor(
    private dishesService: DishesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoutequeryParamSub =
      this.activatedRoute.queryParams.subscribe((params) => {
        const category: UnionCategory = params['category'];

        if (this.checkCategory(category)) {
          this.selectedCategory.next(category);
        } else {
          this.router.navigate([], {
            relativeTo: this.activatedRoute,
          });

          this.selectedCategory.next('')
        }
      });

    this.getCategoryDishes();
  }

  checkCategory(category: string): boolean {
    return category === 'soup' || category === 'salad' || category === 'dessert';
  }

  getCategoryDishes() {
    this.selectedCategory.asObservable().subscribe((category) => {
      switch (category) {
        case 'dessert':
          this.dishesService.getDishesByCategory(category).subscribe((dishes) => {
            if (dishes.length) {
              this.viewDishes = dishes;
            }
          })
          break;

        case 'soup':
          this.dishesService.getDishesByCategory(category).subscribe((dishes) => {
            if (dishes.length) {
              this.viewDishes = dishes;
            }
          })
          break;

        case 'salad':
          this.dishesService.getDishesByCategory(category).subscribe((dishes) => {
            if (dishes.length) {
              this.viewDishes = dishes;
            }
          })
          break;

        default:
          this.dishesService.dishesList$.subscribe((dishes) => {
            if (dishes.length) {
              this.viewDishes = dishes;
            } else {
              this.dishesService.getDishes().subscribe((dishes) => {
                if (dishes.length) {
                  this.viewDishes = dishes;
                }
              });
            }
          });
          break;
      }
    });
  }

  goToCategory(category: UnionCategory | '') {
    if (category) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {category},
      });
    } else {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  trackByCategoryFn(index: any, item: string) {
    return item;
  }

  trackByDishFn(index: any, item: IDish) {
    return item._id;
  }

  ngOnDestroy(): void {
    if (this.activatedRoutequeryParamSub) {
      this.activatedRoutequeryParamSub.unsubscribe();
    }
  }
}
