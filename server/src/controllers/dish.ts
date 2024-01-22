import { getAllDishes } from '../db/dish';
import express from 'express';

export const getDishes = async (req: express.Request, res: express.Response) => {
  try {
    const dishesResult = await getAllDishes();
    return res.status(200).json(dishesResult).end();
  } catch (error) {
    console.log('dish controller error =>', error);
    return res.sendStatus(500);
  }
}
