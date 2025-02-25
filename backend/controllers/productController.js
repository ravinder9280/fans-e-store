
import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';

const addProduct=async (req,res)=>{
    try {
        
        const {name,description,price,category,subcategory,sizes,bestseller}=req.body;
        const image1= req.files.image1 && req.files.image1[0]
        const image2= req.files.image2 && req.files.image2[0]
        const image3= req.files.image3 && req.files.image3[0]
        const image4= req.files.image4 && req.files.image4[0]

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)
        let imagesUrl=await Promise.all(
            images.map(async(item)=>{
                const result=await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )
        console.log(name,description,price,category,subcategory,sizes,bestseller);
        console.log(imagesUrl);
        const productData={
            name,
            description,
            price:Number(price),
            category,
            subcategory,
            sizes:JSON.parse(sizes),
            bestseller:bestseller=="true"?true:false,
            image:imagesUrl,
            Date:Date.now()
        }
        console.log(productData);
        
        const product=new productModel(productData)
        await product.save()
        res.json({success:true,message:"Product Added"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message});
        
        
    }
    
    
}
const listProduct=async (req,res)=>{
    try { 
        const allProducts=await productModel.find({});
        res.json({success:true,allProducts});
        
    } catch (error) {
        res.json({message:error.message,success:false})
        
    }

}
const removeProduct=async (req,res)=>{

    try {
        const {productId}=req.body;
        const removedProduct=await productModel.findByIdAndDelete(productId);
        console.log('product removed successfully');
        
        res.json({success:true,removedProduct,message:"Product Removed Successfully "})
        
    } catch (error) {
        res.json({message:error.message,success:false})
        
        
    }
}
const getCommit=async (req,res)=>{
    try {
        const data=axios.get('https://github.com/ravinder9280/Chatty/commit/0208f0ca66489a68723702a7ced4d07e001c461d.diff')

        res.json({data:data.data})
        
    } catch (error) {
        
    }
}


export {addProduct,listProduct,removeProduct,getCommit}
