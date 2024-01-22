import mongoose from "mongoose";

const DishSchema = new mongoose.Schema({
  title: {type: 'string', required: true},
  imageUrl: {type: 'string', required: true},
  description: {type: 'string', required: true},
  nutritionalValue: {
    proteins: {type: 'number', required: true},
    fats: {type: 'number', required: true},
    carbohydrates: {type: 'number', required: true},
    calories: {type: 'number', required: true},
  },
  category: {type: 'string', enum : ['soup', 'salad', 'dessert'], required: true},
  stepDescription: {type: ['string'], required: true},
  cookingTime: {type: 'number', required: true},
});

export const DishModel = mongoose.model('Dish', DishSchema);

export const getAllDishes = () => DishModel.find();
export const getDishById = (id: string) => DishModel.findById(id);
export const getAllDishesByCategory = (category: string) => DishModel.find({category});
