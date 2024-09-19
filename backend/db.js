import mongoose from 'mongoose';


const connectDB=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://RavinderPro:92809280@cluster0.5n6qkjc.mongodb.net/Fanc-E-Store").then(()=>{
            console.log('connected to DB');
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
    

}
export default connectDB;