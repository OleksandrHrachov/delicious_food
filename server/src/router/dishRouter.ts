import express from 'express';
import { getDishes, getOneDishById } from '../controllers/dish';

export const dishRouter = express.Router();
dishRouter.get('/', getDishes);
dishRouter.get('/:id', getOneDishById);
