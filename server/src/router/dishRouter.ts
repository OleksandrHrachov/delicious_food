import express from 'express';
import { getDishes } from '../controllers/dish';

export const dishRouter = express.Router();
dishRouter.get('/', getDishes);
