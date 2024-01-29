import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDish } from '../types/dish.interface';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, tap } from 'rxjs';

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

  getDishById(id: string) {
    return this.http.get<IDish>(`${environment.backend_url}/dish/${id}`);
  }

  getDishByIdFromDownloadedList(id: string) {
    return this.dishesList$.pipe(
      map((dishes) => {
        return dishes.find((dish) => dish._id === id);
      })
    );
  }
}
