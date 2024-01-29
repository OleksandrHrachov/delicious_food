import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IDish, UnionCategory } from '../types/dish.interface';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  private dishesList$$ = new BehaviorSubject<IDish[]>([]);
  dishesList$ = this.dishesList$$.asObservable();

  constructor(private http: HttpClient) {}

  getDishes() {
    return this.http
      .get<IDish[]>(`${environment.backend_url}/dishes`)
      .pipe(tap((dishes) => this.dishesList$$.next(dishes)));
  }

  getDishById(id: string) {
    return this.http.get<IDish>(`${environment.backend_url}/dish/${id}`);
  }

  getDishesByCategory(category: UnionCategory) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("category", category);
    return this.http.get<IDish[]>(`${environment.backend_url}/dish`, {params:queryParams});
  }

  getDishByIdFromDownloadedList(id: string) {
    return this.dishesList$.pipe(
      map((dishes) => {
        return dishes.find((dish) => dish._id === id);
      })
    );
  }
}
