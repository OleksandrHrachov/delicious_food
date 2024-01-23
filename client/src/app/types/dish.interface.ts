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
  category: 'soup' | 'salad' | 'dessert';
  stepDescription: string[];
  cookingTime: number;
}
