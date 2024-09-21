import express from 'express'
import upload from '../middleware/multer.js'
import { addProduct, listProduct, removeProduct } from '../controllers/productController.js';
const productRouter=express.Router();

productRouter.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct)
productRouter.get('/list',listProduct);
productRouter.post('/remove',removeProduct);






export default productRouter;