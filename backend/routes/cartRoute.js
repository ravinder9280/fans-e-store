import express from 'express'
import authMiddleware from '../middleware/middleware.js';
import { addToCart, getCart, updateCart } from '../controllers/cartController.js';
const cartRouter=express.Router();

cartRouter.post('/add',authMiddleware,addToCart)
cartRouter.post('/update',authMiddleware,updateCart)
cartRouter.post('/get',authMiddleware,getCart)





export default cartRouter;