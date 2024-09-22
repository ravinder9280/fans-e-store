import express from 'express';
import { getOrder, placeOrder } from '../controllers/orderController.js';
import authMiddleware from '../middleware/middleware.js';
const orderRouter=express.Router();

orderRouter.post('/placeOrder',authMiddleware,placeOrder)
orderRouter.post('/get',authMiddleware,getOrder)








export default orderRouter;