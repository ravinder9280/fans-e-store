import express from 'express';
import { placeOrder } from '../controllers/orderController.js';
import authMiddleware from '../middleware/middleware.js';
const orderRouter=express.Router();

orderRouter.post('/placeOrder',authMiddleware,placeOrder)








export default orderRouter;