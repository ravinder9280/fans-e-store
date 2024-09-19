import orderModal from "../models/orderModal.js";
import User from "../models/userModel.js";
import Stripe from 'stripe'
const stripe =new Stripe(process.env.STRIPE_SECRET_KEY)
const frontend_url='http://localhost:5173/'
const placeOrder=async(req,res)=>{

    try{
        const newOrder=new orderModal({
            userId:req.body.userId,
            items:req.body.items,
            address:req.body.address,
            amount:req.body.amount
        })
        const data =await newOrder.save()
        await User.findByIdAndUpdate(req.body.userId,{cartData:{}})
        const line_items=req.body.items.map((item)=>({
            price_data:{
                currency:'inr',
                product_data:{
                    name:item.name,
                    
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:'inr',
                product_data:{
                    name:'Delivery Charges',
                    
                },
                unit_amount:1800
            },
            quantity:1
        })
        const session= await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })
        res.json({message:"Order Placed Successfully",success:true,session_url:session.url})
    }catch(error){
        res.json({message:error.message,success:false})
        console.log(error);
        
    }
 }



 export {placeOrder}

