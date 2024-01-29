export interface IDish {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  nutritionalValue: {
    proteins: number;
    fats: number;
    carbohydrates: number;
    calories: number;
  };
  category: SoupCategory | SaladCategory | DessertCategory;
  stepDescription: string[];
  cookingTime: number;
}

export type SoupCategory = 'soup';
export type SaladCategory = 'salad';
export type DessertCategory = 'dessert';

export type UnionCategory = SoupCategory | SaladCategory | DessertCategory;
