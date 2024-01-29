import { Component, Input } from '@angular/core';
import { IDish } from 'src/app/types/dish.interface';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() dishCard!: IDish;

}
