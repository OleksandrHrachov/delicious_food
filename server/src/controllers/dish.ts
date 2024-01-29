import { getAllDishes, getAllDishesByCategory, getDishById } from '../db/dish';
import express from 'express';

export const getDishes = async (req: express.Request, res: express.Response) => {
  const category = req.query.category as string;

  try {
    if (category) {
      const categoryDishes = await getAllDishesByCategory(category);

      return res.status(200).json(categoryDishes).end();
    }

    const dishesResult = await getAllDishes();
    
    return res.status(200).json(dishesResult).end();
  } catch (error) {
    console.log('dish controller error =>', error);

    return res.sendStatus(500);
  }
}

export const getOneDishById = async (req: express.Request, res: express.Response) => {
  try {
    const {id} = req.params;
    const dishResult = await getDishById(id);
    
    return res.status(200).json(dishResult).end();
  } catch (error) {
    console.log('dish controller error =>', error);

    return res.sendStatus(500);
  }
}
