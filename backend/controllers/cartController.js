import User from "../models/userModel.js";
//add items to user cart
const addToCart = async (req, res) => {
  try {
    let { itemId, size } = req.body;
      let userData = await User.findOne({ _id: req.body.userId });
      let cartData = await userData.cartData;
      if(!size){
          res.json({message:"Please Select Product Size",success:false})
          return
      }
      if(cartData[itemId]){
          if(cartData[itemId][size]){
              cartData[itemId][size]+=1
          }
          else{
              cartData[itemId][size]=1;
          }
          
          
      }
      else{
          cartData[itemId]={}
          cartData[itemId][size]=1;
      }
      
    await User.findByIdAndUpdate(req.body.userId, { cartData:cartData} );
    res.json({ success: true, message: "added to cart" });
    console.log(userData);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//remove items from user cart
const updateCart = async (req, res) => {
  try{
    let{size,itemId,quantity}=req.body;
    let userData = await User.findOne({ _id: req.body.userId });
      let cartData = await userData.cartData;
      cartData[itemId][size]=quantity;
      
    await User.findByIdAndUpdate(req.body.userId, { cartData:cartData} );
    res.json({ success: true, message: "remove from cart" });
    console.log(userData);
    

  }
  catch(error){

  }
};
const getCart = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.body.userId });
    res.json({ success: true, cartData: userData.cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
 };


export { getCart, addToCart, updateCart };
