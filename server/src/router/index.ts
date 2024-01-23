import express from 'express';
import { dishRouter } from './dishRouter';

export const routers = express.Router();
routers.use('/dishes', dishRouter);
routers.use('/dish', dishRouter);
