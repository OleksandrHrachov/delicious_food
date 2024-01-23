import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDish } from '../types/dish.interface';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  private dishesList$$ = new BehaviorSubject<IDish[]>([]);
  dishesList$ = this.dishesList$$.asObservable();
  selectedDish!: IDish;

  constructor(private http: HttpClient) {}

  getDishes() {
    return this.http
      .get<IDish[]>(`${environment.backend_url}/dishes`)
      .pipe(tap((dishes) => this.dishesList$$.next(dishes)));
  }

  addToSelectedDish(dish: IDish) {
    this.selectedDish = dish;
  }

  getDishById(id: string) {
    return this.http.get<IDish>(`${environment.backend_url}/dish/${id}`);
  }
}
